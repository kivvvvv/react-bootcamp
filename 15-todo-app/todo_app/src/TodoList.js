import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

export default class TodoList extends Component {
  constructor() {
    super();

    const todosJSON = localStorage.getItem("todos");
    this.state = {
      todos: todosJSON ? JSON.parse(todosJSON) : []
    };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editingTodo = this.editingTodo.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
    this.doneTodo = this.doneTodo.bind(this);
  }
  addTodo(todo) {
    const newTodo = { ...todo, edit: false, done: false };

    this.setState(state => {
      const newTodos = [...state.todos, newTodo];

      localStorage.setItem("todos", JSON.stringify(newTodos));

      return {
        todos: newTodos
      };
    });
  }
  deleteTodo(id) {
    this.setState(state => {
      const newTodos = state.todos.filter(todo => todo.id !== id);

      localStorage.setItem("todos", JSON.stringify(newTodos));

      return {
        todos: newTodos
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
  saveTodo(id, text) {
    this.setState(state => {
      const currentTodo = state.todos.find(todo => todo.id === id);
      currentTodo.text = text;
      currentTodo.edit = false;

      localStorage.setItem("todos", JSON.stringify(state.todos));

      return state;
    });
  }
  doneTodo(id) {
    this.setState(state => {
      const currentTodo = state.todos.find(todo => todo.id === id);
      currentTodo.done = !currentTodo.done;

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
        done={todo.done}
        deleteTodo={this.deleteTodo}
        editingTodo={this.editingTodo}
        saveTodo={this.saveTodo}
        doneTodo={this.doneTodo}
      />
    ));
  }
  render() {
    return (
      <section className="TodoList">
        <header className="TodoList__header">
          <h1 className="TodoList__header__main">Todo List!</h1>
          <h2 className="TodoList__header__sub">
            A Simple React Todo List App
          </h2>
        </header>
        <div className="TodoList__todos">
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
