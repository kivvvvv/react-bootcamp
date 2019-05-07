import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(newTodo) {
    this.setState(state => {
      return {
        todos: [...state.todos, newTodo]
      };
    });
  }
  renderTodo() {
    return this.state.todos.map(todo => <Todo text={todo.text} />);
  }
  render() {
    return (
      <section>
        <header>
          <h1>Todo List!</h1>
          <h2>A Simple React Todo List App</h2>
        </header>
        <div>
          {this.state.todos.length > 0 ? (
            this.renderTodo()
          ) : (
            <p>There is no todo.</p>
          )}
        </div>
        <div>
          <NewTodoForm addTodo={this.addTodo} />
        </div>
      </section>
    );
  }
}
