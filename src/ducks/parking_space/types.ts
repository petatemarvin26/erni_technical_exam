import {State, Action, Dispatch, Reducer} from 'ducks/types';

import {Vehicle} from 'ducks/vehicle/types';

type ActionType = 'SET-PARKINGSPACES';

type Status = 'available' | 'unavailable' | 'reserved';

type ParkingSpace = {
  id: string;
  status: Status;
  vehicle: Vehicle;
};

type ParkingSpaceState = State<Array<ParkingSpace>>;
type ParkingSpaceActions = Action<ActionType>;
type ParkingSpaceDispatch = Dispatch<ActionType>;
type ParkingSpaceReducer = Reducer<ParkingSpaceState, ParkingSpaceActions>;

const SET_PARKINGSPACES: ActionType = 'SET-PARKINGSPACES';

export type {
  ParkingSpace,
  ParkingSpaceState,
  ParkingSpaceActions,
  ParkingSpaceDispatch,
  ParkingSpaceReducer
};
export {SET_PARKINGSPACES};
