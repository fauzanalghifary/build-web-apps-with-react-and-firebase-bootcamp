import React from "react";
import styles from "./EventList.module.css";

const EventList = ({ events, handleClick }) => {
  return events.map((event, idx) => (
    <div className={styles.card} key={event.id}>
      <h2>{event.title}</h2>
      <button onClick={() => handleClick(event.id)}>delete event</button>
    </div>
  ));
};

export default EventList;
