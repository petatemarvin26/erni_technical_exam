import {
  UPDATE_PARKINGSPACE,
  ParkingSpaceDispatch,
  SET_PARKINGSPACES
} from './types';

const setParkingSpaces: ParkingSpaceDispatch = (payload) => ({
  type: SET_PARKINGSPACES,
  payload
});

const updateParkingSpace: ParkingSpaceDispatch = (payload) => ({
  type: UPDATE_PARKINGSPACE,
  payload
});

export {setParkingSpaces, updateParkingSpace};
