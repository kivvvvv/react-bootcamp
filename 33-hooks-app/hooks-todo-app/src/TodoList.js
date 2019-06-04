import React, { useState } from "react";
import uuid from "uuid/v4";

import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: uuid(), todoText: "something" },
    { id: uuid(), todoText: "someday" }
  ]);

  const [newTodo, setNewTodo] = useState("");

  const handleTextChange = e => {
    setNewTodo(e.target.value);
  };

  const handleAddClick = () => {
    setTodos([...todos, { id: uuid(), todoText: newTodo }]);
  };

  const handleDeleteClick = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleSaveClick = (id, editText) => {
    const prevTodos = [...todos];
    prevTodos.find(todo => todo.id === id).todoText = editText;
    setTodos(prevTodos);
  };

  return (
    <div>
      <div>
        <ul>
          {todos.map(todo => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                todoText={todo.todoText}
                onDelete={handleDeleteClick}
                onSave={handleSaveClick}
              />
            );
          })}
        </ul>
      </div>
      <div>
        <input type="text" onChange={handleTextChange} />
        <button onClick={handleAddClick}>ADD</button>
      </div>
    </div>
  );
}
