import actions from './actions';
import update from 'react-addons-update';

const initialState = {
	googleID: null,
	firstName: null,
	lastName: null,
	categories: [
		{
			items: [],
			category: ''
		}
	],
	activeCategory: null
};

const reducer = (state, action) => {
	state = state || initialState;
	switch (action.type) {
		
		// Updates state upon fetch user success
		case actions.FETCH_USER_SUCCESS:
			console.log('FETCH_USER_SUCCESS');
			const user = action.user;
			const newState = Object.assign({}, state, {
				googleID: user.googleID,
				firstName: user.firstName,
				lastName: user.lastName,
				categories: user.categories,
				activeCategory: user.activeCategory
			});
			return newState;
		
		case actions.FETCH_USER_ERROR:
			console.log('FETCH_USER_ERROR');
			return state;
	
	}
	return state;	
};


exports.reducer = reducer;