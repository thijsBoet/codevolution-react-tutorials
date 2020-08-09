import React, { Component } from 'react'
import LifeCycleA from './components/LifeCycleA'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  // method is called every time a component is re rendered
  // set the State
  // Do not cause side effects eg HTTP requests
  static getDerivedStateFromProps(props, state) {
    return null
  }

  // Dictates if component should re render or not
  // Can compare current state/props with updated state/props
  // Is for performance optimization
  // Do not cause side effects eg setState or HTTP requests
  shouldComponentUpdate(nextProps, nextState) {
    
  }

  // called right before changes form the virtual DOM are to be reflected in the real DOM
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null
  }

  // called only once after each re render cycle
  // can cause side effects by comparing previous props and state
  componentDidUpdate(prevProps, prevState, snapshot) {
    
  }
  
  // Only required method
  // Read props and state and return JSX
  // Do not change state or interact with DOM or make AJAX calls
  render() {
    return (
      <div className="App">
        <LifeCycleA></LifeCycleA>
      </div>
    )
  }
}
