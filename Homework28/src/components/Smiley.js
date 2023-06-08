import React, { useState } from 'react';

const Smiley = ({ emoji }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <span>{emoji}</span>
      <button onClick={handleClick}>Vote</button>
      <span>Count: {count}</span>
    </div>
  );
};

export default Smiley;
