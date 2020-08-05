import React, { Component } from 'react'

export default class componentName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: 'Matthijs',
      lastName: 'Boet',
      age: 38,
      gender: 'Male',
      nationality: 'Dutch',
      occupation: 'front-end developer'
    }
  }
  render() {
    return (
      <div>
        <p>First name: {this.state.firstName}</p>
        <p>Last name: {this.state.lastName}</p>
        <p>Age: {this.state.age}</p>
        <p>Gender: {this.state.gender}</p>
        <p>Nationality: {this.state.nationality}</p>
        <p>Occupation: {this.state.occupation}</p>
      </div>
    );
  }
}
