import React, { Component } from "react";

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <form>
        <label htmlFor="new-todo">New Todo</label>
        <input
          id="new-todo"
          name="text"
          type="text"
          placeholder="New Todo"
          onChange={this.handleChange}
        />
        <button>ADD TODO</button>
      </form>
    );
  }
}
