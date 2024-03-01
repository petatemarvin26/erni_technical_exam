import {SIZE} from 'constants/enums';
import {
  ADD_VEHICLE,
  SET_VEHICLES,
  UPDATE_VEHICLE,
  VehicleReducer,
  VehicleState
} from './types';

const vehicle_initstate: VehicleState = {
  data: [
    {
      id: 'VIN-1',
      size: SIZE.SMALL,
      did_park: false
    }
  ]
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

    case UPDATE_VEHICLE: {
      const payload = action.payload;
      const updated_vehicles = state.data.map((vehicle) => {
        if (vehicle.id === payload.id) return {...vehicle, ...payload};
        return vehicle;
      });
      return {...state, data: updated_vehicles};
    }

    default:
      return state;
  }
};

export * from './actions';
export default car;
