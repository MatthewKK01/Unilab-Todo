/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Todo from "../components/Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todo")) || [];
    setTodos(storedTodos);
  }, []);

  const submitHandler = () => {
    setTodos((prev) => [
      ...prev,
      {
        id: Math.random(),
        task: taskName,
        completed: false,
      },
    ]);
    localStorage.setItem("todo", JSON.stringify(todos));
    setTaskName("");
  };

  const deleteTodo = (id) => {
    const newList = todos.filter((todo) => todo.id !== id);

    setTodos(newList);
    localStorage.setItem("todo", JSON.stringify(newList));
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todo", JSON.stringify(updatedTodos));
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <h1 className="capitalize md:mb-[27px] text-black font-semibold sm:text-3xl md:text-[42px] sm:mb-20">
          add your daily tasks
        </h1>
        <div className="md:w-[595px] sm:w-5/6 sm:h-14 sm:mb-10 sm:m-auto md:mb-[76px] flex items-center ">
          <input
            id="name"
            className="focus:outline-none md:h-[76px] sm:w-full sm:h-full md:w-[487px] rounded-r-none rounded-[4px] md:p-[22px] bg-[#E6EBFF]"
            placeholder="my task"
            value={taskName}
            type="text"
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
          />
          <button
            onClick={submitHandler}
            className="bg-[#5EFC8D] md:w-[108px] sm:h-full sm:w-10 rounded-[4px] font-light md:text-[32px] rounded-l-none md:py-4 md:px-[22px] md:h-[76px]"
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
