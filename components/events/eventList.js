import EventItem from './eventItem';
import styles from './event-list.module.css';

const EventList = (props) => {
  const { events } = props;
  return (
    <ul className={styles.list}>
      {events.map((e) => (
        <EventItem
          key={e.id}
          id={e.id}
          location={e.location}
          date={e.date}
          image={e.image}
          title={e.title}
        />
      ))}
    </ul>
  );
};

export default EventList;
