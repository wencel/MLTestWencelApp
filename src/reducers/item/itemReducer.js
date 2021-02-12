import itemConstants from './itemConstants';

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

export const itemReducer = function (state = initState, action) {
  switch (action.type) {
    case itemConstants.SET_SEARCHED_ITEMS:
      return {
        ...state,
        items: {
          ...state.items,
          data: action.payload,
        },
      };
    case itemConstants.SET_LOADING_SEARCH_ITEMS:
      return {
        ...state,
        items: {
          ...state.items,
          loading: action.payload,
        },
      };
    case itemConstants.SET_ERROR_SEARCH_ITEMS:
      return {
        ...state,
        items: {
          ...state.items,
          error: action.payload,
        },
      };
    case itemConstants.SET_FETCHED_ITEM:
      return {
        ...state,
        selectedItem: {
          ...state.selectedItem,
          data: action.payload,
        },
      };
    case itemConstants.SET_LOADING_FETCH_ITEM:
      return {
        ...state,
        selectedItem: {
          ...state.selectedItem,
          loading: action.payload,
        },
      };
    case itemConstants.SET_ERROR_FETCH_ITEM:
      return {
        ...state,
        selectedItem: {
          ...state.selectedItem,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default itemReducer;
