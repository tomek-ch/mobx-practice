import { useState } from "react";
import { toDoStore } from "./toDoStore";

export const NewToDo = () => {
  const [text, setText] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        toDoStore.addToDo({
          id: Date.now(),
          text,
          completed: false,
        });
        setText("");
      }}
    >
      <input
        value={text}
        placeholder="New task"
        onChange={(e) => setText(e.target.value)}
      />
      <button disabled={!text}>Add</button>
    </form>
  );
};
