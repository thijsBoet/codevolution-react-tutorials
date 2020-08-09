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

  render() {
    console.log("LifeCycleB render - 4");
    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;
