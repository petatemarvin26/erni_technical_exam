import {SET_VEHICLES, VehicleDispatch} from './types';

const setVehicles: VehicleDispatch = (payload) => ({
  type: SET_VEHICLES,
  payload
});

export {setVehicles};
