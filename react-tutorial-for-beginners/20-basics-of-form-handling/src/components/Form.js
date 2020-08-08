import React, { Component } from "react";
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleCommentsChange = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };

  handleTopicChange = (e) => {
    this.setState({
      topic: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);

  }

  render() {
    const {username, comments, topic} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            value={username}
            onChange={this.handleUsernameChange}
            type="text"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="comments">Comments</label>
          <textarea
            value={comments}
            onChange={this.handleCommentsChange}
            name="comments"
            id="comments"
            cols="22"
            rows="10"
          ></textarea>
        </div>
        <div>
          <label htmlFor="topic">Topic</label>
          <select
            value={topic}
            onChange={this.handleTopicChange}
            name="topic"
            id="topics"
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;
