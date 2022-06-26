import "./App.css";
import { useState } from "react";

function App() {
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

  return (
    <div className="App">
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

      {showEvents
        ? events.map((event, idx) => (
            <div key={event.id}>
              <h2>{event.title}</h2>
              <button onClick={() => handleClick(event.id)}>
                delete event
              </button>
            </div>
          ))
        : null}
    </div>
  );
}

export default App;
