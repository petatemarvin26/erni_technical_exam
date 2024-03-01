import {Dispatch as ReduxDispatch, Action as ReduxAction} from 'redux';

import {CarState} from './car/types';
import {ParkingLotState} from './parking_lot/types';
import {ParkingSide, ParkingSideState} from './parking_side/types';
import {ParkingSpaceState} from './parking_space/types';

type MapProps = {
  car?: CarState;
  parkingLot?: ParkingLotState;
  parkingSide?: ParkingSideState;
  parkingSpace?: ParkingSpaceState;
  getParkingSide?: (side_id: string) => ParkingSide | undefined;
};

type MapState = {
  (props: MapProps): MapProps;
};

// type MapDispatch = {
//   (dispatch: ReduxDispatch): {
//     [dispatch: string]: (payload: any) => ReduxAction;
//   };
// };

type MapDispatch = {
  (dispatch: ReduxDispatch<ReduxAction>): {
    dispatch?: (action: ReduxAction) => ReduxAction;
  };
};

type MetaData = {
  page: number;
  size: number;
  total_data: number;
};

type State<E, A = {}> = {
  metadata?: MetaData;
  data: E;
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

type Reducer<S, AT> = {
  (state: S, action: AT): S;
};

export type {MapState, MapDispatch, State, Action, Dispatch, Reducer};
