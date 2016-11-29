import 'isomorphic-fetch';
import Cookies from 'js-cookie';
import ObjectID from 'bson-objectid';


var FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
var fetchUserSuccess = function(user) {
  return {
    type: FETCH_USER_SUCCESS,
    user: user
  };
};

var FETCH_USER_ERROR = 'FETCH_USER_ERROR';
var fetchUserError = function(error) {
  return {
    type: FETCH_USER_ERROR,
    error: error
  };
};

var FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
var fetchEventsSuccess = function(events) {
  return {
    type: FETCH_EVENTS_SUCCESS,
    events: events
  };
};

var FETCH_EVENTS_ERROR = 'FETCH_EVENTS_ERROR';
var fetchEventsError = function(error) {
  return {
    type: FETCH_EVENTS_ERROR,
    error: error
  };
};


// GET request for user info from DB using accessToken
var fetchUser = function() {
  return function(dispatch) {
    var token = Cookies.get('accessToken');
    var headers = new Headers({
      Authorization: 'bearer ' + token
    });
    var url = '/user';
    return fetch(url, {headers: headers}).then(function(response) {
      if (response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response.json();
    })
    .then(function(user) {
      return dispatch(
        fetchUserSuccess(user)
      );
    })
    .catch(function(error) {
      return dispatch(
        fetchUserError(error)
      );
    });
  }
};

// PUT request to add category
var addCategory = function(category) {
  return function(dispatch) {
    var token = Cookies.get('accessToken');
    var url = '/add-category';
  return fetch(url,
    {
      method: 'put',
      headers: {'Content-type': 'application/json', 'Authorization': 'bearer ' + token},
      body: JSON.stringify({
        'categoryName': category,
        'cat_id': ObjectID(),
        'items': []
      })
    }
    ).then(function(response) {
      if(response.status < 200 || response.status > 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response.json();
    })
    .then(function(user) {
      return dispatch(
        fetchUserSuccess(user)
        );
    })
    .catch(function(error) {
      return dispatch(
        fetchUserError(error)
        );
    });
  }
};

// DELETE request to remove entire category
var deleteCategory = function(cat_id) {
  return function(dispatch) {
    var token = Cookies.get('accessToken');
    var url = '/delete-category';
  return fetch(url,
  {
    method: 'delete',
    headers: {'Content-type': 'application/json', 'Authorization': 'bearer ' + token},
    body: JSON.stringify({
      'cat_id': cat_id
    })
  }
    ).then(function(response) {
      if(response.status < 200 || response.status > 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response.json();
    })
    .then(function(user) {
      return dispatch(
        fetchUserSuccess(user)
        );
    })
    .catch(function(error) {
      return dispatch(
        fetchUserError(error)
        );
    });
  }
};

// PUT request to set activeCategory
var setActiveCategory = function(activeCategory) {
  return function(dispatch) {
    var token = Cookies.get('accessToken');
    var url = '/set-active-category';
  return fetch(url,
  {
    method: 'put',
    headers: {'Content-type': 'application/json', 'Authorization': 'bearer ' + token},
    body: JSON.stringify({
        'activeCategory': activeCategory
      })
  }
    ).then(function(response) {
      if(response.status < 200 || response.status > 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response.json();
    })
    .then(function(user) {
      return dispatch(
        fetchUserSuccess(user)
        );
    })
    .catch(function(error) {
      return dispatch(
        fetchUserError(error)
        );
    });
  }
};

// PUT request to add bookmark
var addBookmark = function(title, website, note, cat_id) {
  return function(dispatch) {
    var token = Cookies.get('accessToken');
    var url = `add-bookmark/${cat_id}`;
  return fetch(url,
  {
    method: 'put',
    headers: {'Content-type': 'application/json', 'Authorization': 'bearer ' + token},
    body: JSON.stringify({
      'title': title,
      'url': website,
      'note': note,
      'bookmark_id': ObjectID()
    })
  }
    ).then(function(response) {
      if(response.status < 200 || response.status > 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response.json();
    })
    .then(function(user) {
      return dispatch(
        fetchUserSuccess(user)
        );
    })
    .catch(function(error) {
      return dispatch(
        fetchUserError(error)
        );
    });
  }
};

// DELETE request to delete bookmark
var deleteBookmark = function(cat_id, bookmark_id) {
  console.log('DELETE NOTE ACTION HIT', cat_id);
  return function(dispatch) {
    var token = Cookies.get('accessToken');
    var url = `delete-bookmark/${cat_id}`;
  return fetch(url,
  {
    method: 'delete',
    headers: {'Content-type': 'application/json', 'Authorization': 'bearer ' + token},
    body: JSON.stringify({
      'bookmark_id': bookmark_id
    })
  }
    ).then(function(response) {
      if(response.status < 200 || response.status > 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response.json();
    })
    .then(function(user) {
      console.log('USER SUCCESS DELETE NOTE', user);
      return dispatch(
        fetchUserSuccess(user)
        );
    })
    .catch(function(error) {
      console.log('USER SUCCESS DELETE ERR');
      return dispatch(
        fetchUserError(error)
        );
    });
  }
};

// GET request for user's calendar events
var getCalendarEvents = function() {
  return function(dispatch) {
    var token = Cookies.get('accessToken');
    var headers = new Headers({
      Authorization: 'bearer ' + token
    });
    var url = '/calendar';
    return fetch(url, {headers: headers}).then(function(response) {
      if (response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return response.json();
    })
    .then(function(events) {
      console.log("EVENTS!", events);
      return dispatch(
        fetchEventsSuccess(events)
      );
    })
    .catch(function(error) {
      return dispatch(
        fetchEventsError(error)
      );
    });
  }
};


exports.fetchUser = fetchUser;
exports.fetchUserSuccess = fetchUserSuccess;
exports.fetchUserError = fetchUserError;
exports.FETCH_USER_SUCCESS = FETCH_USER_SUCCESS;
exports.FETCH_USER_ERROR = FETCH_USER_ERROR;
exports.addCategory = addCategory;
exports.deleteCategory = deleteCategory;
exports.setActiveCategory = setActiveCategory;
exports.addBookmark = addBookmark;
exports.deleteBookmark = deleteBookmark;
exports.getCalendarEvents = getCalendarEvents;
exports.fetchEventsSuccess = fetchEventsSuccess;
exports.fetchEventsError = fetchEventsError;
exports.FETCH_EVENTS_SUCCESS = FETCH_EVENTS_SUCCESS;
exports.FETCH_EVENTS_ERROR = FETCH_EVENTS_ERROR;
