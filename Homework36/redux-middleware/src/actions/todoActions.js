// Імпортуємо необхідні типи дій
import { ADD_TODO, DELETE_TODO, EDIT_TODO, DELETE_ALL_TODOS } from "../reducers/todoReducer";

// Додаємо Todo
export const addTodo = (todo) => {
  return (dispatch) => {
    dispatch({ type: ADD_TODO, payload: todo });
  };
};

// Видаляємо Todo
export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };
};

// Редагуємо Todo
export const editTodo = (id, updatedText) => {
  return (dispatch) => {
    dispatch({ type: EDIT_TODO, payload: { id, updatedText } });
  };
};

// Видаляємо всі Todo
export const deleteAllTodos = () => {
  return (dispatch) => {
    dispatch({ type: DELETE_ALL_TODOS });
  };
};
