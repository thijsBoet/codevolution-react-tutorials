import React, { useState } from "react";
import Modal from "react-modal";
import "./App.css";

// Needed for accessibility reasons
Modal.setAppElement("#root");

function App() {
  const [modalisOpen, setModalisOpen] = useState(false);
  return (
    <header className="App">
      <button onClick={() => setModalisOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalisOpen}
        onRequestClose={() => setModalisOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'lightgrey'
          },
          content: {
            color: 'orange',
            borderRadius: '25px',
            margin: '20vw',
            paddingLeft: '40px'
          }
        }}
      >
        <h2>Modal Title</h2>
        <p>Modal body</p>
        <div>
          <button
            onClick={() => setModalisOpen(false)}
          >Close</button>
        </div>
      </Modal>
    </header>
  );
}

export default App;
