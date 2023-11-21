import React, { useState } from "react";
import useTodo from "../contexts/TodoContext";

function Todoitem({ todo, addupdatedTodoMsg }) {
  console.log(todo);
  const [todoMsg, setTodoMsg] = useState("");
  const { deleteTodo, todoCompleted, editTodo } = useTodo();
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const toggleCompleted = () => {
    todoCompleted(todo.id);
  };

  const setTodoMsgAndSend = (msg) => {
    setTodoMsg(msg.target.value);
    console.log(msg.target.value);
    addupdatedTodoMsg(msg.target.value);
  };

  console.log(todoMsg);
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black m-auto
       ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}
       `}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg
      
         ${todo.completed ? "line-through" : ""}`}
        value={isTodoEditable ? todoMsg : todo.todo}
        onChange={setTodoMsgAndSend}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) {
            setIsTodoEditable(false);
            return;
          }
          console.log(isTodoEditable);
          if (isTodoEditable) {
            editTodo(todo.id, todoMsg);
            setIsTodoEditable((prev) => !prev);
          } else setIsTodoEditable((prev) => !prev);
          console.log(isTodoEditable);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default Todoitem;
