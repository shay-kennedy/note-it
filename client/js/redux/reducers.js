import actions from './actions';
import update from 'react-addons-update';

const initialState = {
	googleID: null
};

const reducer = (state, action) => {
	state = state || initialState;
	switch (action.type) {
		
		// Updates state upon fetch user success
		case actions.FETCH_USER_SUCCESS:
			// console.log('FETCH_USER_SUCCESS');
			const user = action.user;
			const newState = Object.assign({}, state, {
				favorites: user.favorites,
				googleID: user.googleID
			});
			return newState;
		
		case actions.FETCH_USER_ERROR:
			// console.log('FETCH_USER_ERROR');
			return state;
	
	}
	return state;	
};


exports.reducer = reducer;