import {SIZE} from 'constants/enums';
import {
  ParkingSideReducer,
  ParkingSideState,
  SET_PARKINGSIDES,
  UPDATE_PARKINGSIDE
} from './types';

const parkingside_initstate: ParkingSideState = {
  data: [
    {
      id: 'A',
      parking_spaces: [
        {
          id: 'A1',
          status: 'available',
          vehicle_id: undefined
        },
        {
          id: 'A2',
          status: 'available',
          vehicle_id: undefined
        },
        {
          id: 'A3',
          status: 'available',
          vehicle_id: undefined
        }
      ]
    },
    {
      id: 'B',
      parking_spaces: [
        {
          id: 'B1',
          status: 'available',
          vehicle_id: undefined
        },
        {
          id: 'B2',
          status: 'available',
          vehicle_id: undefined
        },
        {
          id: 'B3',
          status: 'available',
          vehicle_id: undefined
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

    case UPDATE_PARKINGSIDE: {
      const payload = action.payload;
      const updated_parkside = state.data.map((parkside) => {
        if (parkside.id === payload.id) {
          const parkspaces = parkside.parking_spaces.map((parkspace) => {
            if (parkspace.id === payload.space_id) {
              return {
                ...parkspace,
                status: payload.status,
                vehicle_id: payload.vehicle_id
              };
            }
            return parkspace;
          });
          return {...parkside, parking_spaces: parkspaces};
        }
        return parkside;
      });
      return {...state, data: updated_parkside};
    }

    default:
      return state;
  }
};

export * from './actions';
export default parkingSide;
