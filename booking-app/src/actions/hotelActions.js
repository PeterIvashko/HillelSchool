// src/actions/hotelActions.js

import axios from 'axios';

export const fetchHotels = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/hotels');
      const hotels = response.data;
      dispatch({ type: 'FETCH_HOTELS_SUCCESS', payload: hotels });
    } catch (error) {
      dispatch({ type: 'FETCH_HOTELS_ERROR', payload: error.message });
    }
  };
};
