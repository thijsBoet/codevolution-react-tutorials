import React from 'react';
import FunctionalComponent from "./components/FunctionalComponent";

import './App.css';

function App() {
  return (
    <div className="App">
      <FunctionalComponent name={'props.name'}>props.children</FunctionalComponent>
    </div>
  );
}

export default App;
