import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import styles from './TodoList.module.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const onSubmit = (values) => {
    setTodos([...todos, values.todo]);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.todo || values.todo.length < 5) {
      errors.todo = 'Поле повинно містити щонайменше 5 символів';
    }
    return errors;
  };

  return (
    <div>
      <h2>TODO List</h2>
      <Form onSubmit={onSubmit} validate={validate}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <Field name="todo">
              {({ input, meta }) => (
                <div>
                  <input {...input} type="text" placeholder="Введіть новий елемент" className={styles.input} />
                  {meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
                </div>
              )}
            </Field>
            <button type="submit">Додати</button>
          </form>
        )}
      </Form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
