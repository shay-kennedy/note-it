import React from 'react';
import BookmarksNav from './bookmarks-nav';


const BookmarksContainer = (props) => {
	return(
		<div id="bookmarks-container">
			<BookmarksNav />
			{props.children}
		</div>
	)
};


export default BookmarksContainer;