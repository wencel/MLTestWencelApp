const { default: itemConstants } = require('./itemConstants');
const { itemReducer } = require('./itemReducer');

describe('Items Reducer', () => {
  const initState = {
    items: {
      loading: false,
      data: {
        categories: [],
        items: [],
      },
      error: '',
    },
    selectedItem: {
      loading: false,
      data: {},
      error: '',
    },
  };

  describe('WHEN no action is passed', () => {
    it('should return the initial state', () => {
      expect(itemReducer(initState, {})).toEqual(initState);
    });
  });

  describe('WHEN the set searched items actions is passed', () => {
    it('should return the correct state', () => {
      const testPayload = {
        categories: ['cat1, cat2, cat3'],
        items: [{ id: 'testID1' }, { id: 'testID2' }, { id: 'testID3' }],
      };
      expect(
        itemReducer(initState, {
          type: itemConstants.SET_SEARCHED_ITEMS,
          payload: testPayload,
        })
      ).toEqual({
        ...initState,
        items: {
          ...initState.items,
          data: testPayload,
        },
      });
    });
  });

  describe('WHEN the set loading for searched items actions is passed', () => {
    it('should return the correct state', () => {
      const testPayload = true;
      expect(
        itemReducer(initState, {
          type: itemConstants.SET_LOADING_SEARCH_ITEMS,
          payload: testPayload,
        })
      ).toEqual({
        ...initState,
        items: {
          ...initState.items,
          loading: testPayload,
        },
      });
    });
  });

  describe('WHEN the set error for searched items actions is passed', () => {
    it('should return the correct state', () => {
      const testPayload = 'ERROR';
      expect(
        itemReducer(initState, {
          type: itemConstants.SET_ERROR_SEARCH_ITEMS,
          payload: testPayload,
        })
      ).toEqual({
        ...initState,
        items: {
          ...initState.items,
          error: testPayload,
        },
      });
    });
  });

  describe('WHEN the set fetched item actions is passed', () => {
    it('should return the correct state', () => {
      const testPayload = { id: 'testID1' };
      expect(
        itemReducer(initState, {
          type: itemConstants.SET_FETCHED_ITEM,
          payload: testPayload,
        })
      ).toEqual({
        ...initState,
        selectedItem: {
          ...initState.selectedItem,
          data: testPayload,
        },
      });
    });
  });

  describe('WHEN the set loading for fetched items actions is passed', () => {
    it('should return the correct state', () => {
      const testPayload = true;
      expect(
        itemReducer(initState, {
          type: itemConstants.SET_LOADING_FETCH_ITEM,
          payload: testPayload,
        })
      ).toEqual({
        ...initState,
        selectedItem: {
          ...initState.selectedItem,
          loading: testPayload,
        },
      });
    });
  });

  describe('WHEN the set error for fetched items actions is passed', () => {
    it('should return the correct state', () => {
      const testPayload = 'ERROR';
      expect(
        itemReducer(initState, {
          type: itemConstants.SET_ERROR_FETCH_ITEM,
          payload: testPayload,
        })
      ).toEqual({
        ...initState,
        selectedItem: {
          ...initState.selectedItem,
          error: testPayload,
        },
      });
    });
  });
});
