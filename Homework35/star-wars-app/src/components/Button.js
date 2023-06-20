import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchData, clearData } from '../actions';

const Button = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchData());
  };

  const handleClear = () => {
    dispatch(clearData());
  };

  return (
    <div>
      <button onClick={handleClick}>Отримати інформацію</button>
      <button onClick={handleClear}>Очистити</button>
    </div>
  );
};

export default Button;
