import {SET_CARS, CarReducer, CarState} from './types';

const car_initstate: CarState = {
  data: [
    {
      name: '1'
    },
    {
      name: '2'
    },
    {
      name: '3'
    },
    {
      name: '4'
    },
    {
      name: '5'
    },
    {
      name: '6'
    },
    {
      name: '7'
    }
  ]
};

const car: CarReducer = (state = car_initstate, action) => {
  switch (action.type) {
    case SET_CARS: {
      const cars = action.payload;
      return {...state, data: cars};
    }

    default:
      return state;
  }
};

export * from './actions';
export default car;
