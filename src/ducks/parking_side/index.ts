import {SIZE} from 'constants/enums';
import {
  ADD_PARKINGSIDE,
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
          size: SIZE.SMALL,
          vehicle_id: undefined
        },
        {
          id: 'A2',
          status: 'available',
          size: SIZE.SMALL,
          vehicle_id: undefined
        },
        {
          id: 'A3',
          status: 'available',
          size: SIZE.SMALL,
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
          size: SIZE.MEDIUM,
          vehicle_id: undefined
        },
        {
          id: 'B2',
          status: 'available',
          size: SIZE.SMALL,
          vehicle_id: undefined
        },
        {
          id: 'B3',
          status: 'available',
          size: SIZE.MEDIUM,
          vehicle_id: undefined
        }
      ]
    },
    {
      id: 'C',
      parking_spaces: [
        {
          id: 'C1',
          status: 'available',
          size: SIZE.SMALL,
          vehicle_id: undefined
        },
        {
          id: 'C2',
          status: 'available',
          size: SIZE.LARGE,
          vehicle_id: undefined
        },
        {
          id: 'C3',
          status: 'available',
          size: SIZE.SMALL,
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
    case ADD_PARKINGSIDE: {
      const payload = action.payload;
      const parkside = {
        id: payload.entry_id,
        parking_spaces: Array.from({length: payload.entry_spaces}).map(
          (_, i) => ({
            id: payload.entry_id + (i + 1),
            status: 'available',
            vehicle_id: undefined
          })
        )
      };

      return {...state, data: [...state.data, parkside]};
    }

    case SET_PARKINGSIDES: {
      const parksides = action.payload;
      return {...state, data: parksides};
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
