import React, { useState } from "react";
import uuid from "uuid/v4";

import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: uuid(), todoText: "something" },
    { id: uuid(), todoText: "someday" }
  ]);

  const updateTodos = e => {
    const newTodos = todos.map(todo => ({
      todoText: (todo.todoText = e.target.value)
    }));

    setTodos(newTodos);
  };

  const handleDeleteClick = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
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
      <input type="text" onChange={updateTodos} />
    </div>
  );
}
