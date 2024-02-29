import {
  ParkingLotDispatch,
  SET_ENTRYPOINTS,
  SET_AVAIL_PARKINGSPACE,
  SET_MAX_PARKINGSPACE
} from './types';

const setEntryPoint: ParkingLotDispatch = (payload) => ({
  type: SET_ENTRYPOINTS,
  payload
});
const setAvailParkingSpace: ParkingLotDispatch = (payload) => ({
  type: SET_AVAIL_PARKINGSPACE,
  payload
});
const setMaxParkingSpace: ParkingLotDispatch = (payload) => ({
  type: SET_MAX_PARKINGSPACE,
  payload
});

export {setEntryPoint, setAvailParkingSpace, setMaxParkingSpace};
