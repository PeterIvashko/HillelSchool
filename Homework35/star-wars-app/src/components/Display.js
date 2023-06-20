import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
  const data = useSelector((state) => state.data);
  const request = useSelector((state) => state.request);

  return (
    <div>
      {request.url && (
        <div>
          <h3>Деталі запиту:</h3>
          <p>URL: {request.url}</p>
          <p>Метод: {request.method}</p>
        </div>
      )}
      {data && (
        <div>
          <h3>Інформація про персонажа:</h3>
          <p>Ім'я: {data.name}</p>
          <p>Висота: {data.height}</p>
          <p>Маса: {data.mass}</p>
          {/* Додайте інші властивості персонажа */}
        </div>
      )}
    </div>
  );
};

export default Display;
