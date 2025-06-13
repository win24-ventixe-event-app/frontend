
import { Link } from 'react-router-dom'

const EventCard = ({event}) => {
  return (
    <Link to={`/events/${event.id}`} state={{event: event}} className="event-card-link">
      <div className='event-card-wrapper'>
        <div className='event-image'>
          <img src={event.image} alt={event.name} />
          <span>{event.category}</span>
          <span>{event.status}</span>
        </div>
        <div className='event-details'>
          <div className='event-date'>
            {event.date} — {event.time}
          </div>
          <div>
            <h4>{event.name}</h4>
          </div>
          <div className='event-location'>
            <i className="fa-sharp fa-solid fa-location-dot"></i>
            <span>{event.location}</span>
          </div>
          <div className="event-progress">
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${event.progress}%`}}></div>
            </div>
            <span className="progress-text">{event.progress}%</span>
            <span className="progress-price">${event.price}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default EventCard