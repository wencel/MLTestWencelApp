import { runSaga } from 'redux-saga';
import * as utils from 'utils/request';
import {
  redirectSearchItems,
  requestFetchItem,
  requestSearchItems,
  setErrorFetchItem,
  setErrorSearchItems,
  setFetchedItem,
  setLoadingFetchItem,
  setLoadingSearchItems,
  setSearchedItems,
} from './itemActions';
import {
  redirectSearchItemsSaga,
  requestSearchItemsSaga,
  requestFetchItemSaga,
} from './itemSagas';

describe('itemSagas', () => {
  it('should not do anything if no payload is passed', async () => {
    const dispatched = [];
    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      redirectSearchItemsSaga,
      redirectSearchItems('')
    );
    expect(dispatched.length).toEqual(0);
  });

  it('should redirect to the search page', async () => {
    const dispatched = [];
    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      redirectSearchItemsSaga,
      redirectSearchItems('test search')
    );
    expect(dispatched.length).toEqual(1);
  });

  it('should retrieve a valid set of items from request search items', async () => {
    const dispatched = [];
    const dummyItems = {
      items: [{ id: 'testID1' }, { id: 'testIDs' }],
      categories: ['category1'],
    };

    const requestItemsApi = jest
      .spyOn(utils, 'default')
      .mockImplementation(() => Promise.resolve(dummyItems));
    await runSaga(
      {
        dispatch: action => {
          dispatched.push(action);
        },
      },
      requestSearchItemsSaga,
      requestSearchItems('test search')
    );
    expect(requestItemsApi).toHaveBeenCalledTimes(1);
    expect(dispatched.length).toEqual(4);
    expect(dispatched).toEqual([
      setLoadingSearchItems(true),
      setErrorSearchItems(''),
      setSearchedItems(dummyItems),
      setLoadingSearchItems(false),
    ]);
    requestItemsApi.mockClear();
  });

  it('should not retrieve a valid set of items from request search items, an error is received', async () => {
    const dispatched = [];
    const dummyItems = { error: 'error' };

    const requestItemsApi = jest
      .spyOn(utils, 'default')
      .mockImplementation(() => Promise.resolve(dummyItems));
    await runSaga(
      {
        dispatch: action => {
          dispatched.push(action);
        },
      },
      requestSearchItemsSaga,
      requestSearchItems('test search')
    );
    expect(requestItemsApi).toHaveBeenCalledTimes(1);
    expect(dispatched.length).toEqual(4);
    expect(dispatched).toEqual([
      setLoadingSearchItems(true),
      setErrorSearchItems('error'),
      setSearchedItems({ items: [], categories: [] }),
      setLoadingSearchItems(false),
    ]);
    requestItemsApi.mockClear();
  });

  it('should throw an error on the api request for search items', async () => {
    const dispatched = [];

    const requestItemsApi = jest
      .spyOn(utils, 'default')
      .mockImplementation(() => Promise.reject('error'));
    await runSaga(
      {
        dispatch: action => {
          dispatched.push(action);
        },
      },
      requestSearchItemsSaga,
      requestSearchItems('test search')
    );
    expect(requestItemsApi).toHaveBeenCalledTimes(1);
    expect(dispatched.length).toEqual(4);
    expect(dispatched).toEqual([
      setLoadingSearchItems(true),
      setErrorSearchItems('error'),
      setSearchedItems({ items: [], categories: [] }),
      setLoadingSearchItems(false),
    ]);
    requestItemsApi.mockClear();
  });

  it('should retrieve a valid item from request fetch item given a valid id', async () => {
    const dispatched = [];
    const dummyItem = { item: { id: 'testID1' } };

    const requestItemApi = jest
      .spyOn(utils, 'default')
      .mockImplementation(() => Promise.resolve(dummyItem));
    await runSaga(
      {
        dispatch: action => {
          dispatched.push(action);
        },
      },
      requestFetchItemSaga,
      requestFetchItem('testID')
    );
    expect(requestItemApi).toHaveBeenCalledTimes(1);
    expect(dispatched.length).toEqual(4);
    expect(dispatched).toEqual([
      setLoadingFetchItem(true),
      setErrorFetchItem(''),
      setFetchedItem(dummyItem.item),
      setLoadingFetchItem(false),
    ]);
    requestItemApi.mockClear();
  });

  it('should not retrieve a valid items from request fetch item provided an invalid id', async () => {
    const dispatched = [];
    const dummyItem = { error: 'error' };

    const requestItemApi = jest
      .spyOn(utils, 'default')
      .mockImplementation(() => Promise.resolve(dummyItem));
    await runSaga(
      {
        dispatch: action => {
          dispatched.push(action);
        },
      },
      requestFetchItemSaga,
      requestFetchItem('testID')
    );
    expect(requestItemApi).toHaveBeenCalledTimes(1);
    expect(dispatched.length).toEqual(4);
    expect(dispatched).toEqual([
      setLoadingFetchItem(true),
      setErrorFetchItem('error'),
      setFetchedItem({}),
      setLoadingFetchItem(false),
    ]);
    requestItemApi.mockClear();
  });

  it('should throw an error on the api request for fetch item', async () => {
    const dispatched = [];

    const requestItemApi = jest
      .spyOn(utils, 'default')
      .mockImplementation(() => Promise.reject('error'));
    await runSaga(
      {
        dispatch: action => {
          dispatched.push(action);
        },
      },
      requestFetchItemSaga,
      requestFetchItem('testID')
    );
    expect(requestItemApi).toHaveBeenCalledTimes(1);
    expect(dispatched.length).toEqual(4);
    expect(dispatched).toEqual([
      setLoadingFetchItem(true),
      setErrorFetchItem('error'),
      setFetchedItem({}),
      setLoadingFetchItem(false),
    ]);
    requestItemApi.mockClear();
  });
});
