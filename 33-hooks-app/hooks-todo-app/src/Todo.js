import React from "react";

export default function Todo(props) {
  const { id, onDelete } = props;

  const handleClick = () => {
    onDelete(id);
  };

  return (
    <li>
      <div>
        <div>{props.todoText}</div>
        <div>
          <button onClick={handleClick}>DELETE</button>
        </div>
      </div>
    </li>
  );
}
