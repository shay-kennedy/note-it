import 'babel-polyfill';
import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.static(process.env.CLIENT_PATH));

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

// Passport Strategies
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import passport from 'passport';
import bodyParser from 'body-parser';

// User model
import User from './models/user';

try {
  var config = require('../config');
} catch (e) {};

// Database Setup
const db = process.env.DBPATH || config.mongoDB.dbPath;
mongoose.connect(db);

app.use(passport.initialize());
app.use(bodyParser.json());

// Google OAuth2 Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.CLIENTID || config.googleAuth.clientID,
  clientSecret: process.env.CLIENTSECRET || config.googleAuth.clientSecret,
  callbackURL: process.env.CALLBACKURL || config.googleAuth.callbackURL,
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOne({googleID: profile.id}, (err, user) => {
      if (!user) {
        User.create({
          googleID: profile.id,
          accessToken: accessToken,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName
        }, (err, users) => {
          return done(err, users);
        });
      } else {
        return done(err, user);
      }
    });
  }
));

app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile']
  })
);

app.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/',
    session: false
  }),
  (req, res) => {
    res.cookie('accessToken', req.user.accessToken, {expires: 0});
    res.redirect('/#/notes');
  }
);

// Bearer Strategy
passport.use(new BearerStrategy(
  (token, done) => {
    User.findOne({ accessToken: token },
      (err, users) => {
        if(err) {
          return done(err)
        }
        if(!users) {
          return done(null, false)
        }
        return done(null, users, { scope: 'read' })
      }
    );
  }
));

// GET: Logout route
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// GET: Retrieve user object
app.get('/user', passport.authenticate('bearer', {session: false}), 
  (req, res) => {
    const googleID = req.user.googleID;
    User.findOne({googleID: googleID}, (err, user) => {
      if (err) {
        res.send("Error has occured")
      } else {
        res.json(user);
      }
    });
});

// POST: Add category
app.put('/add-category', passport.authenticate('bearer', {session: false}), 
  (req, res) => {
    User.findOneAndUpdate(
            { 'googleID': req.user.googleID },
            {
              $push: { 'categories':req.body },
              $set: { 'activeCategory': req.body._id }
            },
            { new:true },
      (err, user) => {
        if(err) {
          return res.send(err)
        }
        return res.json(user);
      });
  });

console.log(`Server running in ${process.env.NODE_ENV} mode`);

function runServer() {
  return new Promise((resolve, reject) => {
    app.listen(PORT, HOST, (err) => {
      if (err) {
        console.error(err);
        reject(err);
      }

      const host = HOST || 'localhost';
      console.log(`Listening on ${host}:${PORT}`);
    });
  });
}

if (require.main === module) {
  runServer();
}
