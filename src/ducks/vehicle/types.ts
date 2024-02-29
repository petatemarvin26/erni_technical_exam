import {State, Action, Dispatch, Reducer} from 'ducks/types';

type ActionType = 'SET-VEHICLES';

type Vehicle = {
  name: string;
};
type VehicleState = State<Array<Vehicle>>;
type VehicleActions = Action<ActionType>;
type VehicleDispatch = Dispatch<ActionType>;
type VehicleReducer = Reducer<VehicleState, VehicleActions>;

const SET_VEHICLES: ActionType = 'SET-VEHICLES';

export type {
  Vehicle,
  VehicleState,
  VehicleActions,
  VehicleDispatch,
  VehicleReducer
};
export {SET_VEHICLES};
