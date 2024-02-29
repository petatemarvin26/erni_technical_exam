import {combineReducers} from 'redux';

import parkingLot from './parking_lot';

function rootReducer() {
  return combineReducers({
    parkingLot
  });
}

export default rootReducer;
