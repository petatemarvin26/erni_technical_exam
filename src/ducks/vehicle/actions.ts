import {
  ADD_VEHICLE,
  SET_VEHICLES,
  UPDATE_VEHICLE,
  VehicleDispatch
} from './types';

const setVehicles: VehicleDispatch = (payload) => ({
  type: SET_VEHICLES,
  payload
});

const addVehicle: VehicleDispatch = (payload) => ({
  type: ADD_VEHICLE,
  payload
});

const updateVehicle: VehicleDispatch = (payload) => ({
  type: UPDATE_VEHICLE,
  payload
});

export {setVehicles, addVehicle, updateVehicle};
