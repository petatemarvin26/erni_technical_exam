import {combineReducers} from 'redux';

import parkingLot from './parking_lot';
import parkingSide from './parking_side';
import parkingSpace from './parking_space';

function rootReducer() {
  return combineReducers({
    parkingLot,
    parkingSide,
    parkingSpace
  });
}

export default rootReducer;
