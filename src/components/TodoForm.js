import React, { useState } from "react";
import useTodo from "../contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { todos, addTodo } = useTodo();

  const add = () => {
    addTodo({ id: Math.random() * 5, todo, completed: false });
  };
  console.log(todos);

  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        onClick={add}
      >
        Add
      </button>
    </div>
  );
}

export default TodoForm;
