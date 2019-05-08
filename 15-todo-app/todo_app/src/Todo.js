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
      <form className="Todo-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          className="Todo-form__input"
        />
        <button className="Todo-form__button">SAVE</button>
      </form>
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
  renderTodos() {
    if (this.props.edit) {
      return <div className="Todo__item">{this.renderEditingTodo()}</div>;
    } else {
      return (
        <div className="Todo__item">
          {this.renderTodoItemText()}
          <div className="Todo__item__controls">
            <div onClick={this.handleEditingTodo}>
              <i className="fas fa-pen" />
            </div>
            <div onClick={this.handleDeleteTodo}>
              <i className="fas fa-trash" />
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    return <div className="Todo">{this.renderTodos()}</div>;
  }
}
