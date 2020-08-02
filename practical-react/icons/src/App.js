import React from 'react';
import { IconContext } from 'react-icons'
import { FaReact } from 'react-icons/fa'
import { MdSentimentSatisfied } from "react-icons/md";
import { AiFillAndroid } from 'react-icons/ai'
import './App.css';

function App() {
  return (
    <div className="App">
      <IconContext.Provider value={{ color: "grey", size: "5rem" }}>
        <div>
          <FaReact />
          <MdSentimentSatisfied />
          <AiFillAndroid />
        </div>
      </IconContext.Provider>

      <FaReact color="#324d67" size="10rem" />
      <MdSentimentSatisfied color="red" size="10rem" />
      <AiFillAndroid color="green" size="10rem" />
    </div>
  );
}

export default App;
