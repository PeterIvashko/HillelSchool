import { combineReducers } from 'redux';

const dataReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return action.payload;
    case 'CLEAR_DATA':
      return null;
    default:
      return state;
  }
};

const requestReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_REQUEST_DETAILS':
      return action.payload;
    case 'CLEAR_REQUEST_DETAILS':
      return {};
    default:
      return state;
  }
};

export default combineReducers({
  data: dataReducer,
  request: requestReducer,
});
