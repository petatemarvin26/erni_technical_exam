import {State, Action, Dispatch, Reducer} from 'ducks/types';

type ActionType = 'SET-CARS';

type Car = {
  name: string;
};
type CarState = State<Array<Car>>;
type CarActions = Action<ActionType>;
type CarDispatch = Dispatch<ActionType>;
type CarReducer = Reducer<CarState, CarActions>;

const SET_CARS: ActionType = 'SET-CARS';

export type {Car, CarState, CarActions, CarDispatch, CarReducer};
export {SET_CARS};
