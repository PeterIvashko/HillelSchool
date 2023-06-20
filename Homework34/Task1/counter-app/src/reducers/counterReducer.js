// Ініціалізуємо початковий стан (initial state)
const initialState = {
  count: 0,
};

// Редуктор (reducer), який обробляє дії та змінює стан
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {
        count: state.count + 1,
      };
    case "DECREMENT_COUNTER":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
