import {ParkingSpaceDispatch, SET_PARKINGSPACES} from './types';

const setParkingSpaces: ParkingSpaceDispatch = (payload) => ({
  type: SET_PARKINGSPACES,
  payload
});

export {setParkingSpaces};
