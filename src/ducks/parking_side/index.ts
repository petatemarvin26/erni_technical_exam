import {ParkingSideReducer, ParkingSideState, SET_PARKINGSIDES} from './types';

const parkingside_initstate: ParkingSideState = {
  data: [
    {
      id: 'A',
      parking_spaces: [
        {
          id: 'ps-A-1',
          status: 'available',
          vehicle: {
            name: 'V-e1'
          }
        },
        {
          id: 'ps-B-2',
          status: 'unavailable',
          vehicle: {
            name: 'V-e2'
          }
        },
        {
          id: 'ps-C-3',
          status: 'reserved',
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
          id: 'ps-B-1',
          status: 'available',
          vehicle: {
            name: 'vasd'
          }
        },
        {
          id: 'ps-B-3',
          status: 'available',
          vehicle: {
            name: 'zxc3'
          }
        },
        {
          id: 'ps-C-3',
          status: 'available',
          vehicle: {
            name: '3212'
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
