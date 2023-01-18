import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSavedEvents } from '../../redux/event/event.actions';
import { selectFetchedNotes } from '../../redux/event/event.selectors';

import EventCard from '../event-card/event-card.component';

import './event-list.styles.scss';

let queryParams = {};

const EventList = () => {

	const dispatch = useDispatch();
	const fetchedNotes = useSelector(selectFetchedNotes);
	
	useEffect(() => {
		const fetchUserNotes = async () => {
			await dispatch(getSavedEvents('/items', {
				params: queryParams
			}))
		}

		fetchUserNotes();
	},[]);


	return (
		<div className="events">
		{fetchedNotes ? (
				fetchedNotes.map(({uuid, name, description}) => {
						return (
							<EventCard
								key={uuid}
								title={name}
								body={description}
								uuid={uuid}
							/>
						);
					})
			)
			: <div>No Events to Display</div> 
		}
		</div>
	)
};

export default EventList;