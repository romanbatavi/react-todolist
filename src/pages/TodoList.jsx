import React, { useState } from "react";

import Paper from "../components/paper/Paper";
import Header from "../components/header/Header";
import TodoForm from "../components/todoform/TodoForm";
import Todos from "../components/todos/Todos";
import Container from "../layout/Container";
import Item from "../layout/Item";

const TodoList = () => {
  const [todos, setTodos] = useState([
    // fixed
    { text: "Learning React!", isCompleted: false },
    { text: "Learning Hooks", isCompleted: false },
    { text: "Learning Style", isCompleted: false }
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = (value) => {
    if (todos.length < 9) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];

      setTodos(addedTodo);
    } else {
      alert("Only 9 Todos Bruh!!");
    }
  };
  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  };
  const clearTodos = () => !showAdd && setTodos([]);
  const showAddToggle = () => setShowAdd(!showAdd);

  console.log("todos", todos);

  return (
    <Paper>
      <Container flexDirection="column" justifyContent="space-between">
        <Header
          showAddToggle={showAddToggle}
          showAdd={showAdd}
          clearTodos={clearTodos}
        />
        <TodoForm addTodo={addTodo} showAdd={showAdd} />
        <Todos todos={todos} completeTodo={completeTodo} />
      </Container>
    </Paper>
  );
};

export default TodoList;
