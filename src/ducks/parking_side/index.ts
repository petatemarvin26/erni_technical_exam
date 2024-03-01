import {SIZE} from 'constants/enums';
import {ParkingSideReducer, ParkingSideState, SET_PARKINGSIDES} from './types';

const parkingside_initstate: ParkingSideState = {
  data: [
    {
      id: 'A',
      parking_spaces: [
        {
          id: 'A1',
          status: 'available',
          vehicle_id: 'v-1'
        },
        {
          id: 'A2',
          status: 'unavailable',
          vehicle_id: 'v-2'
        },
        {
          id: 'A3',
          status: 'reserved',
          vehicle_id: 'v-3'
        }
      ]
    },
    {
      id: 'B',
      parking_spaces: [
        {
          id: 'B1',
          status: 'available',
          vehicle_id: 'v-4'
        },
        {
          id: 'B2',
          status: 'available',
          vehicle_id: 'v-5'
        },
        {
          id: 'B3',
          status: 'available',
          vehicle_id: 'v-6'
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
