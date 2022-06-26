import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import React from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 },
  ]);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return event.id !== id;
      });
    });
  };

  const handleClose = (val) => {
    setShowModal(val);
  };

  const subtitle = "All the latest events in Marioland";

  return (
    <div className="App">
      <Title title="Events in Your Area" subtitle={subtitle} />

      {showEvents ? (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      ) : null}
      {!showEvents ? (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      ) : null}

      {showEvents ? (
        <EventList events={events} handleClick={handleClick} />
      ) : null}

      {showModal ? (
        <Modal handleClose={() => handleClose(false)} isSalesModal={true}>
          <h2>100% Off Coupon Code!</h2>
          <p>Use the code NINJA10 at the checkout</p>
        </Modal>
      ) : (
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      )}
    </div>
  );
}

export default App;
