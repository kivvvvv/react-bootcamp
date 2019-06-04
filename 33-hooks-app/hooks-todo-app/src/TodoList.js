import React, { useState } from "react";
import uuid from "uuid/v4";

import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: uuid(), todoText: "something" },
    { id: uuid(), todoText: "someday" }
  ]);

  const [newTodo, setNewTodo] = useState("");

  const handleUpdateChange = e => {
    setNewTodo(e.target.value);
  };

  const handleAddClick = () => {
    setTodos([...todos, { id: uuid(), todoText: newTodo }]);
  };

  const handleDeleteClick = id => {
    setTodos(todos.filter(todo => todo.id !== id));
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
                onDelete={handleDeleteClick}
                todoText={todo.todoText}
              />
            );
          })}
        </ul>
      </div>
      <div>
        <input type="text" onChange={handleUpdateChange} />
        <button onClick={handleAddClick}>ADD</button>
      </div>
    </div>
  );
}
