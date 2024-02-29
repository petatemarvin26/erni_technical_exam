import {State, Action, Dispatch, Reducer} from 'ducks/types';

import {ParkingSpace} from 'ducks/parking_space/types';

type ActionType = 'SET-PARKINGSIDES';

type ParkingSide = {
  side_id: number;
  parking_spaces: Array<ParkingSpace>;
};

type ParkingSideState = State<ParkingSide>;
type ParkingSideActions = Action<ActionType>;
type ParkingSideDispatch = Dispatch<ActionType>;
type ParkingSideReducer = Reducer<ParkingSideState, ParkingSideActions>;

const SET_PARKINGSPACES: ActionType = 'SET-PARKINGSIDES';

export type {
  ParkingSideState,
  ParkingSideActions,
  ParkingSideDispatch,
  ParkingSideReducer
};
export {SET_PARKINGSPACES};
