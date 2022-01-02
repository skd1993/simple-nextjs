import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/eventList';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      {/* <EventSearch /> */}
      <EventList events={featuredEvents} />
    </div>
  );
};

export default HomePage;
