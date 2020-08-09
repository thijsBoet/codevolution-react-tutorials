import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Matthijs",
    };
    console.log("LifeCycleB constructor - 1");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps - 2");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleB componentDidMount - 3");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("LifeCycleB shouldComponentUpdate - 4");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleB getSnapshotBeforeUpdate - 5");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate - 6");
  }

  render() {
    console.log("LifeCycleB render - 7");
    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;
