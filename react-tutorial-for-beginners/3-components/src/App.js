import React from 'react';
import Header from './components/Header';
import WelcomeClassComponent from "./components/WelcomeClassComponent";
import WelcomeFunctionalComponent from "./components/WelcomeFunctionalComponent";

import './App.css';


function App(props) {
  return (
    <div className="App">
      <Header />
      <WelcomeClassComponent name={"Matthijs"} />
      <WelcomeFunctionalComponent name={'Marja'}/>
    </div>
  );
}

export default App;
