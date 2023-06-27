const initialState = {
  hotels: [],
  loading: false,
  error: null,
};

const hotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_HOTELS_SUCCESS':
      return {
        ...state,
        hotels: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_HOTELS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default hotelReducer;
