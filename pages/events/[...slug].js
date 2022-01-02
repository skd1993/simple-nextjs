import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/eventList';

const FilteredEvents = () => {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return <p className='center'>Loading...</p>;
  }

  const year = +filterData[0];
  const month = +filterData[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return <p>Invalid filter</p>;
  }

  console.log(year, month);
  const event = getFilteredEvents({year, month});
  console.log(event);

  if (!event || event.length === 0) {
    return <p>No events found!</p>;
  }

  return <EventList events={event} />;
};

export default FilteredEvents;
