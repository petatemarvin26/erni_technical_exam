import {ParkingSideReducer, ParkingSideState, SET_PARKINGSIDES} from './types';

const parkingside_initstate: ParkingSideState = {
  data: [
    {
      id: 'A',
      parking_spaces: [
        {
          id: 'sp-1',
          status: 'available',
          vehicle: {
            name: 'V-e1'
          }
        },
        {
          id: 'sp-2',
          status: 'available',
          vehicle: {
            name: 'V-e2'
          }
        }
      ]
    },
    {
      id: 'B',
      parking_spaces: [
        {
          id: 'sp-1',
          status: 'available',
          vehicle: {
            name: 'V-e1'
          }
        },
        {
          id: 'sp-2',
          status: 'available',
          vehicle: {
            name: 'V-e2'
          }
        }
      ]
    }
  ]
};

const parkingSide: ParkingSideReducer = (
  state = parkingside_initstate,
  action
) => {
  switch (action.type) {
    case SET_PARKINGSIDES: {
      const parking_sides = action.payload;
      return {...state, data: parking_sides};
    }

    default:
      return state;
  }
};

export * from './actions';
export default parkingSide;
