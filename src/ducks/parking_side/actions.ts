import {
  ADD_PARKINGSIDE,
  ParkingSideDispatch,
  SET_PARKINGSIDES,
  UPDATE_PARKINGSIDE
} from './types';

const addParkingSide: ParkingSideDispatch = (payload) => ({
  type: ADD_PARKINGSIDE,
  payload
});
const setParkingSides: ParkingSideDispatch = (payload) => ({
  type: SET_PARKINGSIDES,
  payload
});
const updateParkingSide: ParkingSideDispatch = (payload) => ({
  type: UPDATE_PARKINGSIDE,
  payload
});

export {addParkingSide, setParkingSides, updateParkingSide};
