import {State, Action, Dispatch, Reducer} from 'ducks/types';

type ActionType = 'SET-STATUS';

type App = {
  status: 'initializing' | 'running' | 'interrupted';
};

type AppState = State<App>;
type AppActions = Action<ActionType>;
type AppDispatch = Dispatch<ActionType>;
type AppReducer = Reducer<App, AppActions>;

const SET_STATUS: ActionType = 'SET-STATUS';

export type {AppState, AppActions, AppDispatch, AppReducer};
export {SET_STATUS};
