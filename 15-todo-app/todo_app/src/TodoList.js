import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [{ id: 1, text: "test1" }, { id: 2, text: "test2" }]
    };
  }
  renderTodo() {
    return this.state.todos.map(todo => <Todo id={todo.id} text={todo.text} />);
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
          <NewTodoForm />
        </div>
      </section>
    );
  }
}
