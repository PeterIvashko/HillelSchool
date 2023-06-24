import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Footer from "./components/Footer";

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
    <TodoForm />
    <Footer />
  </Provider>,
  document.getElementById("root")
);
