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
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editingTodo = this.editingTodo.bind(this);
  }
  addTodo(newTodo) {
    this.setState(state => {
      return {
        todos: [...state.todos, newTodo]
      };
    });
  }
  deleteTodo(id) {
    this.setState(state => {
      return {
        todos: state.todos.filter(todo => todo.id !== id)
      };
    });
  }
  editingTodo(id) {
    this.setState(state => {
      const currentTodo = state.todos.find(todo => todo.id === id);
      currentTodo.edit = !currentTodo.edit;

      return state;
    });
  }
  renderTodos() {
    return this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        text={todo.text}
        id={todo.id}
        edit={todo.edit}
        deleteTodo={this.deleteTodo}
        editingTodo={this.editingTodo}
      />
    ));
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
            this.renderTodos()
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
