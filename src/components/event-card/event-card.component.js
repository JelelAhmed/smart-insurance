import React from "react";
import { useDispatch } from "react-redux";

import { toggleDeleteEvent, toggleUpdateEvent  } from "../../redux/event/event.actions";

import './event-card.styles.scss';

const EventCard = ({ title, body, uuid }) => {
	
	const dispatch = useDispatch();

	const  eventToUpdate = {
		name: title,
		description: body,
		uuid: uuid
	};

	const EventToDelete = {
		name: title,
		uuid: uuid,
		description: body
	}

	return (
		<div className="card">
			<div className="event">
				<div className="event-headline">
					<p className="event-tag">Name</p>
					<p className="event-name">{title}</p>
				</div>

				<div className="event-body">
					<p className="event-tag">Description</p>
					<p className="event-note">
						{body}
					</p>
				</div>
				<div className="event-buttons">
					<button onClick={()=> dispatch(toggleUpdateEvent(eventToUpdate))} className="buttons inverted">Edit</button>
					<button onClick={()=> dispatch(toggleDeleteEvent(EventToDelete))} className="buttons">Delete</button>
				</div>	
			</div>
		</div>
	)
};

export default EventCard;