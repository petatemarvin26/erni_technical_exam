import {SET_CARS, CarDispatch} from './types';

const setCars: CarDispatch = (payload) => ({
  type: SET_CARS,
  payload
});

export {setCars};
