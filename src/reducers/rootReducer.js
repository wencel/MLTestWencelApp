import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import itemReducer from 'reducers/item/itemReducer';

export const history = createBrowserHistory();

// extra reducers can be added if needed
const rootReducer = combineReducers({
  router: connectRouter(history),
  item: itemReducer,
});
export default rootReducer;
