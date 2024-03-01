import {State, Action, Dispatch, Reducer} from 'ducks/types';

type ActionType = 'SET-PARKINGSPACES' | 'OCCUPY-PARKING-SPACE';

type Status = 'available' | 'unavailable' | 'reserved';

type ParkingSpace = {
  id: string;
  status: Status;
  vehicle_id?: string;
};

type ParkingSpaceState = State<Array<ParkingSpace>>;
type ParkingSpaceActions = Action<ActionType>;
type ParkingSpaceDispatch = Dispatch<ActionType>;
type ParkingSpaceReducer = Reducer<ParkingSpaceState, ParkingSpaceActions>;

const SET_PARKINGSPACES: ActionType = 'SET-PARKINGSPACES';
const UPDATE_PARKINGSPACE: ActionType = 'OCCUPY-PARKING-SPACE';

export type {
  ParkingSpace,
  ParkingSpaceState,
  ParkingSpaceActions,
  ParkingSpaceDispatch,
  ParkingSpaceReducer
};
export {SET_PARKINGSPACES, UPDATE_PARKINGSPACE};
