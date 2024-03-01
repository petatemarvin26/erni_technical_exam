import {ADD_VEHICLE, SET_VEHICLES, VehicleDispatch} from './types';

const setVehicles: VehicleDispatch = (payload) => ({
  type: SET_VEHICLES,
  payload
});

const addVehicle: VehicleDispatch = (payload) => ({
  type: ADD_VEHICLE,
  payload
});

export {setVehicles, addVehicle};
