import {combineReducers} from 'redux';

import vehicle from './vehicle';
import parkingLot from './parking_lot';
import parkingSide from './parking_side';
import parkingSpace from './parking_space';

function rootReducer() {
  return combineReducers({
    vehicle,
    parkingLot,
    parkingSide,
    parkingSpace
  });
}

export default rootReducer;
