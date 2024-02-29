import {State, Action, Dispatch, Reducer} from 'ducks/types';

type ActionType =
  | 'SET-ENTRYPOINTS'
  | 'SET-AVAILABLE-PARKINGSPACE'
  | 'SET-MAX-PARKINGSPACE';

type ParkingLot = {
  entry_points: number;
  available_parkingspace: number;
  max_parkingspace: number;
};

type ParkingLotState = State<ParkingLot>;
type ParkingLotActions = Action<ActionType>;
type ParkingLotDispatch = Dispatch<ActionType>;
type ParkingLotReducer = Reducer<ParkingLotState, ParkingLotActions>;

const SET_ENTRYPOINTS: ActionType = 'SET-ENTRYPOINTS';
const SET_AVAIL_PARKINGSPACE: ActionType = 'SET-AVAILABLE-PARKINGSPACE';
const SET_MAX_PARKINGSPACE: ActionType = 'SET-MAX-PARKINGSPACE';

export type {
  ParkingLotState,
  ParkingLotActions,
  ParkingLotDispatch,
  ParkingLotReducer
};
export {SET_ENTRYPOINTS, SET_AVAIL_PARKINGSPACE, SET_MAX_PARKINGSPACE};
