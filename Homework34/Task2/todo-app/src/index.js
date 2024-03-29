import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import todoReducer from "./reducers/todoReducer";
import App from "./App";

// Створюємо зберігання (store) за допомогою створення redux store і передачі редуктора
const store = createStore(todoReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
