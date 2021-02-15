import React from "react";

import Todo from "./Todo";
const Todos = () => {
  const todos = [
    {
      text: " Belajar1"
    },
    {
      text: " Belajar2"
    },
    {
      text: " Belajar3"
    },
    {
      text: " Belajar4"
    },
    {
      text: " Belajar5"
    },
    {
      text: " Belajar6"
    },
    {
      text: " Belajar7"
    },
    {
      text: " Belajar8"
    },
    {
      text: " Belajar9"
    }
  ];
  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
