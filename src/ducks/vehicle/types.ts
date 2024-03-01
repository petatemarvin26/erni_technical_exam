import {SIZE} from 'constants/enums';
import {State, Action, Dispatch, Reducer} from 'ducks/types';

type ActionType = 'SET-VEHICLES' | 'ADD-VEHICLE' | 'UPDATE-VEHICLE'

type Vehicle = {
  id?: string;
  name?: string;
  size?: SIZE;
  did_park?: boolean;
};
type VehicleState = State<Array<Vehicle>>;
type VehicleActions = Action<ActionType>;
type VehicleDispatch = Dispatch<ActionType>;
type VehicleReducer = Reducer<VehicleState, VehicleActions>;

const SET_VEHICLES: ActionType = 'SET-VEHICLES';
const ADD_VEHICLE: ActionType = 'ADD-VEHICLE';
const UPDATE_VEHICLE: ActionType = 'UPDATE-VEHICLE';

export type {
  Vehicle,
  VehicleState,
  VehicleActions,
  VehicleDispatch,
  VehicleReducer
};
export {SET_VEHICLES, ADD_VEHICLE, UPDATE_VEHICLE};
