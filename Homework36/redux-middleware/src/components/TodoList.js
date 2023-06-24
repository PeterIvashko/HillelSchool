import React from "react";
import { connect } from "react-redux";
import { deleteTodo, editTodo } from "../actions/todoActions";

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleEdit = (id, text) => {
    const updatedText = prompt("Enter updated text:", text);
    if (updatedText) {
      editTodo(id, updatedText);
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { deleteTodo, editTodo })(TodoList);
