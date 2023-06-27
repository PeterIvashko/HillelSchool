import { put, call, takeEvery } from 'redux-saga/effects';
import { setHotels } from '../actions/hotelActions';
import api from '../services/api';

function* fetchHotels() {
  try {
    const response = yield call(api.getHotels);

    yield put(setHotels(response.data));
  } catch (error) {
    console.error('Error fetching hotels:', error);
  }
}

function* watchFetchHotels() {
  yield takeEvery('FETCH_HOTELS', fetchHotels);
}

export default function* hotelSaga() {
  yield all([
    watchFetchHotels(),
  ]);
}
