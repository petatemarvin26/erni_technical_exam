import {combineReducers} from 'redux';

import app from './app';

function rootReducer() {
  return combineReducers({
    app
  });
}

export default rootReducer;
