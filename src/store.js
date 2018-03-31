import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import debug from 'debug';

export const history = createHistory();
const routerMiddlewareInstance = routerMiddleware(history);
const reduxLog = debug('redux');

const logMiddleware = store => next => action => {
  reduxLog('action', action);
  const result = next(action);
  reduxLog('next state', store.getState());

  return result;
};

const store = createStore(
  combineReducers({
    router: routerReducer
  }),
  applyMiddleware(routerMiddlewareInstance, logMiddleware)
);

export default store;
