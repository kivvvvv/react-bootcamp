import React, { useState } from "react";

export default function Todo(props) {
  const { id, todoText, onDelete, onSave } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [editTodoText, setEditTodoText] = useState(todoText);

  const handleDeleteClick = () => {
    onDelete(id);
  };

  const handleEditTodoTextChange = e => {
    setEditTodoText(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setEditTodoText(todoText);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    onSave(id, editTodoText);
    setIsEditing(false);
  };

  const renderEditView = () => {
    return (
      <div>
        <div>
          <input
            type="text"
            value={editTodoText}
            onChange={handleEditTodoTextChange}
          />
        </div>
        <div>
          <button onClick={handleSaveClick}>SAVE</button>
          <button onClick={handleCancelClick}>CANCEL</button>
        </div>
      </div>
    );
  };

  const renderDefaultView = () => {
    return (
      <div>
        <div>{todoText}</div>
        <div>
          <button onClick={handleDeleteClick}>DELETE</button>
          <button onClick={handleEditClick}>EDIT</button>
        </div>
      </div>
    );
  };

  return <li>{isEditing ? renderEditView() : renderDefaultView()}</li>;
}
