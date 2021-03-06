import React, { Component } from "react";
import "./NewTodoForm.css";
import uuid from "uuid/v4";

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      text: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState(state => {
      return {
        ...state,
        [name]: value
      };
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo({ ...this.state, id: uuid() });
    this.setState({
      id: "",
      text: ""
    });
  }
  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="new-todo" className="NewTodoForm__label">
          New Todo
        </label>
        <input
          id="new-todo"
          name="text"
          type="text"
          placeholder="New Todo"
          value={this.state.text}
          onChange={this.handleChange}
          className="NewTodoForm__input"
        />
        <button className="NewTodoForm__button">ADD TODO</button>
      </form>
    );
  }
}
