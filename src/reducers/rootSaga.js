import { all } from 'redux-saga/effects';
import itemSagas from './item/itemSagas';

// All aditional sagas can be added here to have a centralized way to init them
export default function* rootSaga() {
  yield all([itemSagas()]);
}
