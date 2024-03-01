import {
  UPDATE_PARKINGSPACE,
  ParkingSpaceReducer,
  ParkingSpaceState,
  SET_PARKINGSPACES
} from './types';

const parkingspace_initstate: ParkingSpaceState = {
  data: []
};

const parkingSpace: ParkingSpaceReducer = (
  state = parkingspace_initstate,
  action
) => {
  switch (action.type) {
    case SET_PARKINGSPACES: {
      const parkingSpaces = action.payload;
      return {...state, data: parkingSpaces};
    }

    default:
      return state;
  }
};

export * from './actions';
export default parkingSpace;
