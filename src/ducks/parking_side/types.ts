import {State, Action, Dispatch, Reducer} from 'ducks/types';

import {ParkingSpace} from 'ducks/parking_space/types';

type ActionType = 'SET-PARKINGSIDES';

type ParkingSide = {
  id: string;
  parking_spaces: Array<ParkingSpace>;
};

type ParkingSideState = State<Array<ParkingSide>>;
type ParkingSideActions = Action<ActionType>;
type ParkingSideDispatch = Dispatch<ActionType>;
type ParkingSideReducer = Reducer<ParkingSideState, ParkingSideActions>;

const SET_PARKINGSIDES: ActionType = 'SET-PARKINGSIDES';

export type {
  ParkingSide,
  ParkingSideState,
  ParkingSideActions,
  ParkingSideDispatch,
  ParkingSideReducer
};
export {SET_PARKINGSIDES};
