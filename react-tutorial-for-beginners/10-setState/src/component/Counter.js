import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState(
      // {
      //   count: this.state.count + 1,
      // },

      (prevState, props) => ({
      count: prevState.count + 1
      }),

      () => {
        console.log("Callback value: ", this.state.count);
      }
    );
    console.log("Async value: ", this.state.count);
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  decrement() {
    this.setState(
      {
        count: this.state.count - 1,
      },
      () => {
        console.log("Callback value: ", this.state.count);
      }
    );
    console.log("Async value: ", this.state.count);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.decrement()}>decrement</button>
        <div>count : {this.state.count} </div>
        <button onClick={() => this.increment()}>increment</button><br/>
        <button onClick={() => this.incrementFive()}>increment Five</button>
      </div>
    );
  }
}

export default Counter;
