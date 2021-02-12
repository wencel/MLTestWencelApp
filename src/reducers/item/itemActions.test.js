import * as itemActions from './itemActions';
import itemConstants from './itemConstants';

describe('actions', () => {
  it('should create an action to redirect to the searched items page', () => {
    const text = 'Test search';
    const expectedAction = {
      type: itemConstants.REDIRECT_SEARCH_ITEMS,
      payload: text,
    };
    expect(itemActions.redirectSearchItems(text)).toEqual(expectedAction);
  });

  it('should create an action to request the items from the backend', () => {
    const text = 'Test search';
    const expectedAction = {
      type: itemConstants.REQUEST_SEARCH_ITEMS,
      payload: text,
    };
    expect(itemActions.requestSearchItems(text)).toEqual(expectedAction);
  });
  it('should create an action to set the items recieved from the bakcend', () => {
    const items = [{ id: 'testID' }, { id: 'testID2' }, { id: 'testID3' }];
    const expectedAction = {
      type: itemConstants.SET_SEARCHED_ITEMS,
      payload: items,
    };
    expect(itemActions.setSearchedItems(items)).toEqual(expectedAction);
  });
  it('should create an action to set or clear the loading flag for the item list', () => {
    const flag = true;
    const expectedAction = {
      type: itemConstants.SET_LOADING_SEARCH_ITEMS,
      payload: flag,
    };
    expect(itemActions.setLoadingSearchItems(flag)).toEqual(expectedAction);
  });
  it('should create an action to set the error on items list', () => {
    const error = 'Error';
    const expectedAction = {
      type: itemConstants.SET_ERROR_SEARCH_ITEMS,
      payload: error,
    };
    expect(itemActions.setErrorSearchItems(error)).toEqual(expectedAction);
  });
  it('should create an action to fetch an item given an id', () => {
    const id = 'testID';
    const expectedAction = {
      type: itemConstants.REQUEST_FETCH_ITEM,
      payload: id,
    };
    expect(itemActions.requestFetchItem(id)).toEqual(expectedAction);
  });
  it('should create an action to set the fetched item', () => {
    const item = { id: 'testID' };
    const expectedAction = {
      type: itemConstants.SET_FETCHED_ITEM,
      payload: item,
    };
    expect(itemActions.setFetchedItem(item)).toEqual(expectedAction);
  });
  it('should create an action to set or clear the loading flag for the selected item', () => {
    const flag = true;
    const expectedAction = {
      type: itemConstants.SET_LOADING_FETCH_ITEM,
      payload: flag,
    };
    expect(itemActions.setLoadingFetchItem(flag)).toEqual(expectedAction);
  });
  it('should create an action to set the error on the selected item', () => {
    const error = 'Error';
    const expectedAction = {
      type: itemConstants.SET_ERROR_FETCH_ITEM,
      payload: error,
    };
    expect(itemActions.setErrorFetchItem(error)).toEqual(expectedAction);
  });
});
