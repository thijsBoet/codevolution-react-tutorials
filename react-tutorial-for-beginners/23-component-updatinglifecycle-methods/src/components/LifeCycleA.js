import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Matthijs",
    };
    console.log("LifeCycleA constructor - 1");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps - 2");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount - 3");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("LifeCycleA shouldComponentUpdate - 4")
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate - 5");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate - 6");
  }

  changeState = () => {
    this.setState({
      name: 'JSdev.nl'
    })
  }

  render() {
    console.log("LifeCycleA render - 7");
    return (
      <div>
        LifeCycleA
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB></LifeCycleB>
      </div>
    );
  }
}

export default LifeCycleA
