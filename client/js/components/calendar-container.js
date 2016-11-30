import React from 'react';
import actions from '../redux/actions';
import { connect } from 'react-redux';
import CalendarEvents from './calendar-events';


var CalendarContainer = React.createClass({
	render: function(props) {
		var eventList = this.props.events.map((event, index) => {
			if (event.description == undefined) {
				event.description = 'There is no description for this event';
			}
			var date = new Date(event.start.dateTime);
			var options = {
			    weekday: "long", year: "numeric", month: "short",
			    day: "numeric", hour: "2-digit", minute: "2-digit"
			};
			event.time = date.toLocaleTimeString('en-us', options);
			return <CalendarEvents key={index} event={event} />
		});
		return(
			<div id="calendar-container">
				{eventList}
			</div>
		)
	}
})


var mapStateToProps = function(state, props) {
  return {
    events: state.events
  };
};

var Container = connect(mapStateToProps)(CalendarContainer);

module.exports = Container;
