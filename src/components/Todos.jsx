import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";
const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos">
      {todos.lenght > 0 &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo.text}
              isCompleted={todo.isCompleted}
              completeTodo={completeTodo}
              index={index}
            />
          );
        })}
      {todos.lenght === 0 && (
        <div className="todo-placeholder-text">
          Add Todo By Clicking{" "}
          <span className="add-button-placeholder-text">Add</span> Button On the
          Top Left Corner
        </div>
      )}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string })),
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
