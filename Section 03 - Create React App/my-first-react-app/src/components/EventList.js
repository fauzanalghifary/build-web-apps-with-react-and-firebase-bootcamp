import React from "react";

const EventList = ({ events, handleClick }) => {
  return events.map((event, idx) => (
    <React.Fragment key={event.id}>
      <h2>{event.title}</h2>
      <button onClick={() => handleClick(event.id)}>delete event</button>
    </React.Fragment>
  ));
};

export default EventList;
