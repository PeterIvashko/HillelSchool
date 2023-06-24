import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoActions";
import { Form, Field } from "react-final-form";

const TodoForm = ({ addTodo }) => {
  const onSubmit = (values, form) => {
    addTodo({
      id: Date.now(),
      text: values.todoText,
    });
    form.reset();
  };

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="todoText">
            {({ input }) => (
              <div>
                <input {...input} placeholder="Enter todo" />
              </div>
            )}
          </Field>
          <button type="submit">Add Todo</button>
        </form>
      )}
    </Form>
  );
};

export default connect(null, { addTodo })(TodoForm);
