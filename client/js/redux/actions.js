import 'isomorphic-fetch';
import Cookies from 'js-cookie';


const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    user: user
  };
};

const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
const fetchUserError = (error) => {
  return {
    type: FETCH_USER_ERROR,
    error: error
  };
};


// GET request for user info from DB with GoogleID and favorites
var fetchUser = () => {
  return (dispatch) => {
    const token = Cookies.get('accessToken');
  	const headers = new Headers({
  		Authorization: 'bearer ' + token
  	});
    const url = '/user';
    return fetch(url, {headers: headers}).then((response) => {
      if (response.status < 200 || response.status >= 300) {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response.json();
    })
    .then((user) => {
      return dispatch(
        fetchUserSuccess(user)
      );
    })
    .catch((error) => {
      return dispatch(
        fetchUserError(error)
      );
    });
  }
};


exports.fetchUser = fetchUser;
exports.fetchUserSuccess = fetchUserSuccess;
exports.fetchUserError = fetchUserError;
exports.FETCH_USER_SUCCESS = FETCH_USER_SUCCESS;
exports.FETCH_USER_ERROR = FETCH_USER_ERROR;

