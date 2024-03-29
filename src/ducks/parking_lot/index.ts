import {
  ADD_ENTRYPOINT,
  ParkingLotReducer,
  ParkingLotState,
  SET_AVAIL_PARKINGSPACE,
  SET_ENTRYPOINTS,
  SET_MAX_PARKINGSPACE
} from './types';

const parkinglot_initstate: ParkingLotState = {
  data: {
    entry_points: 3,
    available_parkingspace: 10,
    max_parkingspace: 10,
    parking_sides: ['A', 'B', 'C']
  }
};

const parkingLot: ParkingLotReducer = (
  state = parkinglot_initstate,
  action
) => {
  switch (action.type) {
    case SET_ENTRYPOINTS: {
      const entry_points = action.payload;
      return {
        ...state,
        data: {...state.data, entry_points}
      };
    }

    case SET_AVAIL_PARKINGSPACE: {
      const available_parkingspace = action.payload;
      return {
        ...state,
        data: {...state.data, available_parkingspace}
      };
    }

    case SET_MAX_PARKINGSPACE: {
      const max_parkingspace = action.payload;
      return {
        ...state,
        data: {...state.data, max_parkingspace}
      };
    }

    case ADD_ENTRYPOINT: {
      const entry_point = action.payload;
      const parking_sides = [...state.data.parking_sides, entry_point];
      return {
        ...state,
        data: {...state.data, parking_sides}
      };
    }

    default:
      return state;
  }
};

export * from './actions';
export default parkingLot;
