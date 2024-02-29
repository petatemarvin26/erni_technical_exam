import {SET_VEHICLES, VehicleReducer, VehicleState} from './types';

const vehicle_initstate: VehicleState = {
  data: []
};

const vehicle: VehicleReducer = (state = vehicle_initstate, action) => {
  switch (action.type) {
    case SET_VEHICLES: {
      const vehicles = action.payload;
      return {...state, data: vehicles};
    }

    default:
      return state;
  }
};

export * from './actions';
export default vehicle;
