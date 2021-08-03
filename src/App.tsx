import { observer } from "mobx-react-lite";
import "./App.css";
import { NewToDo } from "./NewToDoItem";
import { ToDoItem } from "./ToDoItem";
import { toDoStore } from "./toDoStore";

function App() {
  return (
    <div className="App">
      <h4>
        Completed: {toDoStore.completedCount}/{toDoStore.todos.length}
      </h4>
      <NewToDo />
      {toDoStore.todos.map((toDo) => (
        <ToDoItem key={toDo.id} toDo={toDo} />
      ))}
    </div>
  );
}

export default observer(App);
