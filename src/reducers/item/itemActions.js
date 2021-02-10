import itemConstants from './itemConstants';

export const redirectSearchItems = payload => ({
  type: itemConstants.REDIRECT_SEARCH_ITEMS,
  payload: payload,
});

export const requestSearchItems = payload => ({
  type: itemConstants.REQUEST_SEARCH_ITEMS,
  payload: payload,
});

export const setSearchedItems = payload => ({
  type: itemConstants.SET_SEARCHED_ITEMS,
  payload: payload,
});

export const setLoadingSearchItems = payload => ({
  type: itemConstants.SET_LOADING_SEARCH_ITEMS,
  payload: payload,
});

export const setErrorSearchItems = payload => ({
  type: itemConstants.SET_ERROR_SEARCH_ITEMS,
  payload: payload,
});

export const requestFetchItem = payload => ({
  type: itemConstants.REQUEST_FETCH_ITEM,
  payload: payload,
});

export const setFetchedItem = payload => ({
  type: itemConstants.SET_FETCHED_ITEM,
  payload: payload,
});

export const setLoadingFetchItem = payload => ({
  type: itemConstants.SET_LOADING_FETCH_ITEM,
  payload: payload,
});

export const setErrorFetchItem = payload => ({
  type: itemConstants.SET_ERROR_FETCH_ITEM,
  payload: payload,
});
