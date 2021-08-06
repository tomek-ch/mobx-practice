import { useState } from "react";
import { ToDo, toDoStore } from "./toDoStore";

interface Props {
  toDo: ToDo;
}

export function ToDoItem({ toDo: { id, text, completed } }: Props) {
  const [editable, setEditable] = useState(false);
  const [editedText, setEditedText] = useState(text);

  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toDoStore.toggleDone(id)}
      />
      {editable ? (
        <input
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          autoFocus
        />
      ) : (
        <span>{text}</span>
      )}
      {editable ? (
        <>
          <button
            disabled={!editedText}
            onClick={() => {
              setEditable(false);
              toDoStore.updateToDo(id, editedText);
            }}
          >
            Save
          </button>
          <button onClick={() => setEditable(false)}>Cancel</button>
        </>
      ) : (
        <>
          <button onClick={() => setEditable(true)}>Edit</button>
          <button onClick={() => toDoStore.removeToDo(id)}>Delete</button>
        </>
      )}
    </div>
  );
}
