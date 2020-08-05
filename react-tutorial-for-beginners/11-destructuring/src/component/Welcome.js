import React, { Component } from 'react'

export default class Welcome extends Component {
  render() {
    const { name, heroName, children } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <h2>A.K.A. {heroName}</h2>
        <h3>{children}</h3>
        <br />
        <hr />
        <br />
      </div>
    );
  }
}
