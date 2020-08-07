import React, { Component } from 'react'

class UseGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Thijs</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    // let message;
    // if (this.state.loggedIn) {
    //   message = <div>Welcome Thijs</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>

    // Ternary operator
    return (
      this.state.isLoggedIn
        ? <div>Welcome Thijs</div>
        : <div>Welcome Guest</div>
    );
    
    // Short Circuit approach
    return this.state.isLoggedIn && <div>Welcome Thijs</div>;
  }
}

export default UseGreeting
