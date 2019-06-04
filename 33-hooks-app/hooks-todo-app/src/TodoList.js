import React, { useState } from "react";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { todoText: "something" },
    { todoText: "someday" }
  ]);

  const updateTodos = e => {
    const newTodos = todos.map(todo => ({
      todoText: (todo.todoText = e.target.value)
    }));

    setTodos(newTodos);
  };
  return (
    <div>
      <ul>
        {todos.map(todo => {
          return <Todo todoText={todo.todoText} />;
        })}
      </ul>
      <input type="text" onChange={updateTodos} />
    </div>
  );
}
