import React, { Component } from 'react';
import LifeCycleA from './components/LifeCycleA';

class App extends Component {
  // Will get called when new component is created
  // Initializing state | Binds Event Handlers
  // Do not cause side effects e.g. HTTP request
  constructor(props) {
    // super overwrites this.state
    super(props)
  
    this.state = {
       
    }
  }
  
  // render method reads props & state and returns JSX
  // Do not change state or interact with DOM or make AJAX calls
  render() {
    return (
      <div>
        <LifeCycleA></LifeCycleA>
      </div>
    );
  }
  // componentDidMount()
  // invoked immediately after component is rendered to the DOM
  // Perfect place to cause side effect, interact with DOM, change state, make AJAX calls
}

export default App;
