let nextTodoId = 1;

export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: nextTodoId++,
      text: text,
    },
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: "DELETE_TODO",
    payload: todoId,
  };
};
