import { autorun, makeAutoObservable } from "mobx";

export interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}

const localData = localStorage.getItem("todos");

class ToDoStore {
  todos: ToDo[] = localData ? JSON.parse(localData) : [];

  constructor() {
    makeAutoObservable(this);
    autorun(() => localStorage.setItem("todos", JSON.stringify(this.todos)));
  }

  addToDo(newToDo: ToDo) {
    this.todos.push(newToDo);
  }

  removeToDo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  toggleDone(id: number) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo
    );
  }

  updateToDo(id: number, newText: string) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            text: newText,
          }
        : todo
    );
  }

  get completedCount() {
    return this.todos.reduce((sum, todo) => sum + Number(todo.completed), 0);
  }
}

export const toDoStore = new ToDoStore();
