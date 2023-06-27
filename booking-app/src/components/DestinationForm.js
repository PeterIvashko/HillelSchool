import React from 'react';

const DestinationForm = () => {

  return (
    <form>
      <label htmlFor="destination">Destination:</label>
      <select id="destination" name="destination">
        {}
      </select>

      <label htmlFor="checkIn">Check-in:</label>
      <input type="date" id="checkIn" name="checkIn" />

      <label htmlFor="checkOut">Check-out:</label>
      <input type="date" id="checkOut" name="checkOut" />

      <label htmlFor="adults">Adults:</label>
      <input type="number" id="adults" name="adults" min="1" max="5" />

      <label htmlFor="children">Children:</label>
      <input type="number" id="children" name="children" min="0" max="5" />

      <button type="submit">Send</button>
    </form>
  );
};

export default DestinationForm;
