import { call, all } from 'redux-saga/effects';
import api from '../services/api'; 
import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setHotels } from '../actions/hotelActions';

function* handleFormSubmit(action) {
  try {

    const { destination, checkIn, checkOut, adults, children } = action.payload;

    const response = yield call(api.getHotels, { destination, checkIn, checkOut, adults, children });

    yield put(setHotels(response.data));

    yield put(push('/hotels'));
  } catch (error) {
    console.error('Error submitting form:', error);
  }
}

function* watchFormSubmit() {
  yield takeEvery('FORM_SUBMIT', handleFormSubmit);
}

export default function* formSaga() {
  yield all([
    watchFormSubmit(),
  ]);
}
