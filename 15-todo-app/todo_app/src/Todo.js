import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text
    };

    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.handleEditingTodo = this.handleEditingTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleDeleteTodo() {
    this.props.deleteTodo(this.props.id);
  }
  handleEditingTodo() {
    this.props.editingTodo(this.props.id);
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
  handleSubmit() {
    this.props.saveTodo(this.props.id, this.state.text);
  }
  handleClick() {
    this.props.doneTodo(this.props.id);
  }
  renderEditingTodo() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button>SAVE</button>
        </form>
      </div>
    );
  }
  renderTodoItemText() {
    if (this.props.done)
      return (
        <p
          className="Todo__item__text Todo__item__text--done"
          onClick={this.handleClick}
        >
          {this.props.text}
        </p>
      );
    return (
      <p className="Todo__item__text" onClick={this.handleClick}>
        {this.props.text}
      </p>
    );
  }
  render() {
    return (
      <div className="Todo">
        {this.props.edit ? (
          this.renderEditingTodo()
        ) : (
          <div className="Todo__item">
            {this.renderTodoItemText()}
            <button onClick={this.handleDeleteTodo}>DELETE</button>
            <button onClick={this.handleEditingTodo}>EDIT</button>
          </div>
        )}
      </div>
    );
  }
}
