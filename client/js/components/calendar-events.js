import React from 'react';


const CalendarEvents = (props) => {
	return(
		<div className="calendar-events">
			<a href={props.event.htmlLink} target="_blank" > <p>{props.event.summary}</p></a>
			<p><strong>When:</strong> {props.event.time}</p>
			<p><strong>Location:</strong> {props.event.location}</p>
			<p><strong>Organizer:</strong> {props.event.organizer.email}</p>
			<p><strong>Description:</strong> {props.event.description}</p>
		</div>
	)
};


export default CalendarEvents;
