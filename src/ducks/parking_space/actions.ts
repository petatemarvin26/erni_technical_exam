import {SET_VEHICLES, VehicleDispatch} from 'ducks/vehicle/types';

const setVehicles: VehicleDispatch = (payload) => ({
  type: SET_VEHICLES,
  payload
});

export {setVehicles};
