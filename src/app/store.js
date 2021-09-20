/* eslint-disable import/prefer-default-export */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import logger from 'redux-logger';

const reducer = combineReducers({
});

export const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);
