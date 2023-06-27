export const setDestination = (destination) => ({
  type: 'SET_DESTINATION',
  payload: destination,
});

export const setCheckIn = (checkIn) => ({
  type: 'SET_CHECK_IN',
  payload: checkIn,
});

export const setCheckOut = (checkOut) => ({
  type: 'SET_CHECK_OUT',
  payload: checkOut,
});

export const setAdults = (adults) => ({
  type: 'SET_ADULTS',
  payload: adults,
});

export const setChildren = (children) => ({
  type: 'SET_CHILDREN',
  payload: children,
});

export const clearForm = () => ({
  type: 'CLEAR_FORM',
});

export const sendForm = (formData) => ({
  type: 'SEND_FORM',
  payload: formData,
});
