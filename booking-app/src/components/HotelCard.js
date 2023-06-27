import React from 'react';

const HotelCard = ({ hotel }) => {
  return (
    <div>
      <img src={hotel.image} alt={hotel.name} />
      <h3>{hotel.name}</h3>
      <p>Address: {hotel.address}</p>
      <p>City: {hotel.city}</p>
    </div>
  );
};

export default HotelCard;
