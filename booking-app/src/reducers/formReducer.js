const initialState = {
  destination: '',
  checkIn: '',
  checkOut: '',
  adults: '',
  children: '',
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DESTINATION':
      return {
        ...state,
        destination: action.payload,
      };
    case 'SET_CHECK_IN':
      return {
        ...state,
        checkIn: action.payload,
      };
    case 'SET_CHECK_OUT':
      return {
        ...state,
        checkOut: action.payload,
      };
    case 'SET_ADULTS':
      return {
        ...state,
        adults: action.payload,
      };
    case 'SET_CHILDREN':
      return {
        ...state,
        children: action.payload,
      };
    case 'CLEAR_FORM':
      return initialState;
    default:
      return state;
  }
};

export default formReducer;
