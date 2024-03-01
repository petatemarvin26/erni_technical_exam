import {State, Action, Dispatch, Reducer} from 'ducks/types';

import {ParkingSpace} from 'ducks/parking_space/types';

type ActionType =
  | 'SET-PARKINGSIDES'
  | 'UPDATE-PARKINGSIDE'
  | 'ADD-PARKINGSIDE'
  | 'ADD-PARKINGSPACE';

type ParkingSide = {
  id: string;
  parking_spaces: Array<ParkingSpace>;
};

type ParkingSideState = State<Array<ParkingSide>>;
type ParkingSideActions = Action<ActionType>;
type ParkingSideDispatch = Dispatch<ActionType>;
type ParkingSideReducer = Reducer<ParkingSideState, ParkingSideActions>;

const ADD_PARKINGSIDE: ActionType = 'ADD-PARKINGSIDE';
const SET_PARKINGSIDES: ActionType = 'SET-PARKINGSIDES';
const UPDATE_PARKINGSIDE: ActionType = 'UPDATE-PARKINGSIDE';

const ADD_PARKINGSPACE: ActionType = 'ADD-PARKINGSPACE';

export type {
  ParkingSide,
  ParkingSideState,
  ParkingSideActions,
  ParkingSideDispatch,
  ParkingSideReducer
};
export {
  ADD_PARKINGSIDE,
  SET_PARKINGSIDES,
  UPDATE_PARKINGSIDE,
  ADD_PARKINGSPACE
};
