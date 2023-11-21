import { useEffect, useState } from "react";
import "./App.css";
import { TodoContextProvider } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState(() => {
    let storedTodos = localStorage.getItem("todos");
    try {
      return JSON.parse(storedTodos);
    } catch (err) {
      return [];
    }
  });
  const [todo, setTodo] = useState();
  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const todoCompleted = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  };
  const editTodo = (id, todoMsg) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, todo: todoMsg };
        }
        return todo;
      });
    });
  };
  const addupdatedTodoMsg = (msg) => {
    setTodo(msg);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ addTodo, todos, deleteTodo, todoCompleted, editTodo }}
    >
      <div className="bg-[#341641] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((el) => (
              <TodoItem
                key={el.id}
                todo={el}
                addupdatedTodoMsg={addupdatedTodoMsg}
              />
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
