import {SIZE} from 'constants/enums';
import {ADD_VEHICLE, SET_VEHICLES, VehicleReducer, VehicleState} from './types';

const vehicle_initstate: VehicleState = {
  data: []
};

const car: VehicleReducer = (state = vehicle_initstate, action) => {
  switch (action.type) {
    case SET_VEHICLES: {
      const vehicles = action.payload;
      return {...state, data: vehicles};
    }

    case ADD_VEHICLE: {
      const vehicle = action.payload;
      const vehicles = [...state.data, vehicle];
      return {...state, data: vehicles};
    }

    default:
      return state;
  }
};

export * from './actions';
export default car;
