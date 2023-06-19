import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h2>Головна</h2>
      <form>
        <label htmlFor="todo">TODO:</label>
        <input type="text" id="todo" />
        <button type="submit">Додати</button>
      </form>
    </div>
  );
};

export default HomePage;
