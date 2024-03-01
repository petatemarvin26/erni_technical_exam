import {ParkingSideDispatch, SET_PARKINGSIDES, UPDATE_PARKINGSIDE} from './types';

const setParkingSides: ParkingSideDispatch = (payload) => ({
  type: SET_PARKINGSIDES,
  payload
});
const updateParkingSide: ParkingSideDispatch = (payload) => ({
  type: UPDATE_PARKINGSIDE,
  payload
});

export {setParkingSides, updateParkingSide};
