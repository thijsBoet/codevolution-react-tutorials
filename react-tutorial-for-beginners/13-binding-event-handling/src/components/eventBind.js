import React, { Component } from "react";

class eventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    /* Recommanded approach */
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    // ERRORS OUT
    // this.setState({
    //   message : 'Goodbye'
    // })
    console.log(this); // => THIS IS UNDEFINED
    // THIS is binded to the clickHandler and therefor no longer undefined
    this.setState({
      message: "Goodbye",
    });
  }

  clickHandlerArrow = () => {
    this.setState({
      message: 'Goodbye'
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click undefined</button>
        <br />
        {/* bind method rerenders every onClick event */}
        <button onClick={this.clickHandler.bind(this)}>Click ES5 Bind</button>
        <br />
        {/* also performance implications */}
        <button onClick={() => this.clickHandler()}>Click ES6 Arrow</button>
        <br />
        {/* Recommanded approach, most performant */}
        <button onClick={this.clickHandler}>
          Click Bind in the class constructor
        </button>
        <br/>
        {/* Recommanded approach, most performant */}
        <button onClick={this.clickHandlerArrow}>
          Click Arrow Handler
        </button>
      </div>
    );
  }
}

export default eventBind;
