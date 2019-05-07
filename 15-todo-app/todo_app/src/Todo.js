import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  }
  handleDeleteTodo() {
    this.props.deleteTodo(this.props.id);
  }
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
        <button onClick={this.handleDeleteTodo}>DELETE</button>
      </div>
    );
  }
}
