import { useEffect, useState } from "react"
import EventCard from "./EventCard";
import eventImage1 from '../../assets/images/eventImage1.svg';
const EventList = () => {

  const [events, setEvents] = useState([
    { 
      id: 1, 
      name: "Adventure Gear Show", 
      location: "Rocky Ridge Exhibition Hall, Denver, CO",
      image: eventImage1, 
      category: "Outdoor & Adventure", 
      status: "Active",
      date: "June 5, 2029",
      time: "3:00 PM",
      progress: 65,
      price: 40
    },
    { 
      id: 2, 
      name: "Symphony Under the Stars", 
      location: "Rocky Ridge Exhibition Hall, Denver, CO",
      image: eventImage1, 
      category: "Outdoor & Adventure", 
      status: "Active",
      date: "June 5, 2029",
      time: "3:00 PM",
      progress: 75,
      price: 50
    },
    { 
      id: 3, 
      name: "Runway Revolution 2029", 
      location: "Rocky Ridge Exhibition Hall, Denver, CO",
      image: eventImage1, 
      category: "Outdoor & Adventure", 
      status: "Active",
      date: "June 5, 2029",
      time: "3:00 PM",
      progress: 50,
      price: 100
    },
    { 
      id: 4, 
      name: "Global Wellness Summit", 
      location: "Rocky Ridge Exhibition Hall, Denver, CO",
      image: eventImage1, 
      category: "Outdoor & Adventure", 
      status: "Active",
      date: "June 5, 2029",
      time: "3:00 PM",
      progress: 40,
      price: 75
    },

  ]);

  const getEvents = async () => {
    const response = await fetch('/api/events');
    if(response.ok ) {
      const data = await response.json();
      setEvents(data);
    }
  }

  useEffect (() => {
    getEvents();
  }, []);
  return (
    <div>
      <div className="event-list-header">
        <h1>Events</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search name, event, etc" />
        </div>
        <div className="tabs">
          <div className="tab active">Active (48)</div>
          <div className="tab">Draft (22)</div>
          <div className="tab">Past (32)</div>
        </div>
      </div>
      <div className="event-list-grid">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}

export default EventList