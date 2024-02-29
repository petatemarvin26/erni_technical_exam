import {Dispatch as ReduxDispatch, Action as ReduxAction} from 'redux';

import {AppState} from './app/types';

type MapProps = {
  app: AppState;
};

type MapState = {
  (props: MapProps): MapProps;
};

type MapDispatch = {
  (dispatch: ReduxDispatch): {
    [dispatch: string]: (payload: any) => ReduxAction;
  };
};

type MetaData = {
  page: number;
  size: number;
  total_data: number;
};

type State<E, A = {}> = {
  metadata?: MetaData;
  data?: E;
  error?: any;
  loading?: boolean;
} & A;

type Action<T> = {
  type: T;
  payload: any;
};

type Dispatch<T> = {
  (payload: any): Action<T>;
};

type Reducer<E, AT> = {
  (state: State<E>, action: AT): State<E>;
};

export type {MapState, MapDispatch, State, Action, Dispatch, Reducer};
