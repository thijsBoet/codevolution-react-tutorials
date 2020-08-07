import React from 'react';

import './App.css';
import NameList from './components/NameList';
import PersonList from "./components/PersonList";

function App() {
  return (
    <div className="App">
      <NameList />
      <PersonList />
    </div>
  );
}

export default App;
