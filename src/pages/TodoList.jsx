/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../components/Header";
import Todo from "../components/Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState("");

  const submitHandler = () => {
    setTodos((prev) => [
      ...prev,
      {
        id: Math.random(),
        task: taskName,
        completed: false,
      },
    ]);
    setTaskName("");
  };

  const deleteTodo = (id) => {
    const newList = todos.filter((todo) => todo.id !== id);

    setTodos(newList);
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <h1 className="capitalize mb-[27px] text-black font-semibold text-[42px]">
          add your daily tasks
        </h1>
        <div className="w-[595px] mb-[76px] flex items-center ">
          <input
            id="name"
            className="focus:outline-none h-[76px] w-[487px] rounded-r-none rounded-[4px] p-[22px] bg-[#E6EBFF]"
            placeholder="my task"
            value={taskName}
            type="text"
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
          />
          <button
            onClick={submitHandler}
            className="bg-[#5EFC8D] w-[108px] rounded-[4px] font-light text-[32px] rounded-l-none py-4 px-[22px] h-[76px]"
          >
            Add
          </button>
        </div>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
