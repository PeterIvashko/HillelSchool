// Описуємо дії (actions)
export const incrementCounter = () => {
  return {
    type: "INCREMENT_COUNTER",
  };
};

export const decrementCounter = () => {
  return {
    type: "DECREMENT_COUNTER",
  };
};
