import React from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
import "./styles/styles.css";

const App = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="app">
      <h2>Todo App</h2>
      <TodoForm />
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <footer>Total Todos: {todos.length}</footer>
    </div>
  );
};

export default App;
