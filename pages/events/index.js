import EventList from '../../components/events/eventList';
import EventSearch from '../../components/events/eventSearch';
import { getAllEvents } from '../../dummy-data';
import { useRouter } from 'next/router';

const Events = () => {
  const events = getAllEvents();
  const router = useRouter();
  
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  
  return (
    <div>
      <EventSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </div>
  );
};

export default Events;
