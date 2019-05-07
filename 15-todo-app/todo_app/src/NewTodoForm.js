import React, { Component } from "react";

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      text: ""
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="new-todo">New Todo</label>
        <input
          id="new-todo"
          name="text"
          type="text"
          placeholder="New Todo"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button>ADD TODO</button>
      </form>
    );
  }
}
