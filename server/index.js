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
var User = require('./models/user');

try {
  var config = require('../config');
} catch (e) {};

// Database Setup
var db = process.env.DBPATH || config.mongoDB.dbPath;
mongoose.connect(db);

app.use(passport.initialize());
app.use(bodyParser.json());

// Google OAuth2 Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.CLIENTID || config.googleAuth.clientID,
  clientSecret: process.env.CLIENTSECRET || config.googleAuth.clientSecret,
  callbackURL: process.env.CALLBACKURL || config.googleAuth.callbackURL,
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({googleID: profile.id}, function(err, user) {
      if (!user) {
        User.create({
          googleID: profile.id,
          accessToken: accessToken,
          fullName: profile.displayName
        }, function(err, users) {
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
  function(req, res) {
    res.cookie('accessToken', req.user.accessToken, {expires: 0});
    res.redirect('/');
  }
);

// Bearer Strategy
passport.use(new BearerStrategy(
  function(token, done) {
    User.findOne({ accessToken: token },
      function(err, users) {
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

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
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
