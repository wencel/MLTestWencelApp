import { push } from 'connected-react-router';
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {
  setFetchedItem,
  setLoadingFetchItem,
  setLoadingSearchItems,
  setSearchedItems,
  setErrorFetchItem,
  setErrorSearchItems,
} from './itemActions';
import itemConstants from './itemConstants';

function* redirectSearchItems(action) {
  try {
    if (action.payload) yield put(push(`/items?search=${action.payload}`));
  } catch (e) {
    //TODO: implement error handling to comply with the UI
    console.log(e);
  }
}

function* requestSearchItems(action) {
  try {
    yield put(setLoadingSearchItems(true));
    const items = yield call(
      request,
      `${process.env.REACT_APP_API_URL}/items?q=${action.payload}`,
      { method: 'GET' }
    );
    if (items.error) {
      yield put(setErrorFetchItem(items.error));
      yield put(setSearchedItems({ items: [], categories: [] }));
    } else {
      yield put(setErrorFetchItem(''));
      yield put(
        setSearchedItems({ items: items.items, categories: items.categories })
      );
    }
    yield put(setLoadingSearchItems(false));
  } catch (e) {
    //TODO: implement error handling to comply with the UI
    yield put(setErrorSearchItems(e));
    yield put(setSearchedItems({ items: [], categories: [] }));
    yield put(setLoadingSearchItems(false));
  }
}

function* requestFetchItem(action) {
  try {
    yield put(setLoadingFetchItem(true));
    const item = yield call(
      request,
      `${process.env.REACT_APP_API_URL}/items/${action.payload}`,
      { method: 'GET' }
    );
    if (item.error) {
      yield put(setErrorFetchItem(item.error));
      yield put(setFetchedItem({}));
    } else {
      yield put(setErrorFetchItem(''));
      yield put(setFetchedItem(item.item));
    }

    yield put(setLoadingFetchItem(false));
  } catch (e) {
    //TODO: implement error handling to comply with the UI
    yield put(setErrorFetchItem(e));
    yield put(setFetchedItem({}));
    yield put(setLoadingFetchItem(false));
  }
}

export default function* itemSagas() {
  yield takeLatest(itemConstants.REDIRECT_SEARCH_ITEMS, redirectSearchItems);
  yield takeLatest(itemConstants.REQUEST_SEARCH_ITEMS, requestSearchItems);
  yield takeLatest(itemConstants.REQUEST_FETCH_ITEM, requestFetchItem);
}
