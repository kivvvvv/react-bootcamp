import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      edit: this.props.edit
    };

    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.handleEditingTodo = this.handleEditingTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
  render() {
    return (
      <div>
        {this.props.edit ? (
          <div>
            <form>
              <input
                type="text"
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
              />
              <button>SAVE</button>
            </form>
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
