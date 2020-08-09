import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: "Matthijs"
    }
    console.log('LifeCycleA constructor - 1')
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps - 2");
    return null
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount - 3");
  }
  
  render() {
    console.log("LifeCycleA render - 4");
    return (
      <div>
        LifeCycleA
        <LifeCycleB></LifeCycleB>
      </div>
    );
  }
}

export default LifeCycleA
