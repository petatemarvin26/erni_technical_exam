import {ParkingSideReducer, ParkingSideState, SET_PARKINGSIDES} from './types';

const parkingside_initstate: ParkingSideState = {
  data: []
};

const parkingSide: ParkingSideReducer = (
  state = parkingside_initstate,
  action
) => {
  switch (action.type) {
    case SET_PARKINGSIDES: {
      const parking_sides = action.payload;
      return {...state, data: parking_sides};
    }

    default:
      return state;
  }
};

export * from './actions';
export default parkingSide;
