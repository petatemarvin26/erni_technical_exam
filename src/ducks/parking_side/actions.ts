import {
  ADD_PARKINGSIDE,
  ADD_PARKINGSPACE,
  ParkingSideDispatch,
  SET_PARKINGSIDES,
  UPDATE_PARKINGSIDE
} from './types';

const addParkingSpace: ParkingSideDispatch = (payload) => ({
  type: ADD_PARKINGSPACE,
  payload
});

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

export {addParkingSpace, addParkingSide, setParkingSides, updateParkingSide};
