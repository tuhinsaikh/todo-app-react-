import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  editTodo: (id) => {},
  deleteTodo: (id) => {},
  todoCompleted: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

export default function useTodo() {
  return useContext(TodoContext);
}
