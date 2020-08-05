import React, { Component } from 'react'

export default class Welcome extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>A.K.A. {this.props.heroName}</h2>
        <h3>{this.props.children}</h3>
        <br />
        <hr />
        <br />
      </div>
    );
  }
}
