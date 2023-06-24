import React from "react";
import { connect } from "react-redux";
import { deleteAllTodos } from "../actions/todoActions";

const Footer = ({ todos, deleteAllTodos }) => {
  const handleDeleteAll = () => {
    deleteAllTodos();
  };

  return (
    <div>
      <button onClick={handleDeleteAll}>Delete All</button>
      <p>У вас {todos.length} записей</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { deleteAllTodos })(Footer);
