import { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
const Events = () => {

  // eslint-disable-next-line no-unused-vars
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    try {
      const response = await fetch("/api/events");
      if(response.ok) {
        const data = await response.json();
        setEvents(data);
      }
    }
    catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getEvents();
    }, []);
  return ( 
    <div>
      <h1> Events</h1>
      {
        events.map((event) => (
          <EventCard key={Event.id} event={event} />
        ))
      }
    </div>
  );
}

export default Events;