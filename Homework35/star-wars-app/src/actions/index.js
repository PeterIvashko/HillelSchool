import axios from 'axios';

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://swapi.dev/api/people/1/');
      dispatch({ type: 'SET_DATA', payload: response.data });
      dispatch({ type: 'SET_REQUEST_DETAILS', payload: { url: response.config.url, method: response.config.method } });
    } catch (error) {
      console.error(error);
    }
  };
};

export const clearData = () => {
  return (dispatch) => {
    dispatch({ type: 'CLEAR_DATA' });
    dispatch({ type: 'CLEAR_REQUEST_DETAILS' });
  };
};
