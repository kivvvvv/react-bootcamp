import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.handleEditingTodo = this.handleEditingTodo.bind(this);
  }
  handleDeleteTodo() {
    this.props.deleteTodo(this.props.id);
  }
  handleEditingTodo() {
    this.props.editingTodo(this.props.id);
  }
  render() {
    return (
      <div>
        {this.props.edit ? (
          <div>
            <input type="text" value={this.props.text} />
            <button>SAVE</button>
          </div>
        ) : (
          <div>
            <p>{this.props.text}</p>
            <button onClick={this.handleDeleteTodo}>DELETE</button>
            <button onClick={this.handleEditingTodo}>EDIT</button>
          </div>
        )}
      </div>
    );
  }
}
