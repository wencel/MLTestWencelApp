import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { history } from './rootReducer';
import rootSaga from './rootSaga';
import logger from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';

const sagaMiddleware = createSagaMiddleware();
// if more middlewares are needed this is the place to add them
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let applyMid;
if (process.env.NODE_ENV === 'development') {
  applyMid = applyMiddleware(sagaMiddleware, routerMiddleware(history), logger);
} else {
  applyMid = applyMiddleware(sagaMiddleware, routerMiddleware(history));
}

export const store = createStore(rootReducer, composeEnhancers(applyMid));

sagaMiddleware.run(rootSaga);
