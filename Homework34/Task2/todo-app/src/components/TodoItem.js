import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../actions/todoActions";
import "../styles/styles.css";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li className="todo-item">
      <span className="todo-text">{todo.text}</span>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
