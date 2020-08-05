import React from 'react';
import Greet from './component/Greet'
import Welcome from './component/Welcome'

import './App.css';

function App() {
  return (
    <div className="App">
      <Greet name={"Bruce"} heroName={"Batman"}>
        Created by: Bob Kane
      </Greet>
      <Greet name={"Clark"} heroName={"Superman"}>
        <button>Action</button>
      </Greet>
      <Greet name={"Diana"} heroName={"Wonder Woman"}></Greet>
      <Welcome name={"Dr Henry Pym"} heroName={"Antman"} />
      <Welcome name={"Steve Rogers"} heroName={"Captain America"} />
      <Welcome name={"Tony Stark"} heroName={"Iron man"} />
    </div>
  );
}

export default App;
