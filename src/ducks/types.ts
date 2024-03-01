import {Dispatch as ReduxDispatch, Action as ReduxAction} from 'redux';

import {Vehicle, VehicleState} from './vehicle/types';
import {ParkingLotState} from './parking_lot/types';
import {ParkingSide, ParkingSideState} from './parking_side/types';
import {ParkingSpace, ParkingSpaceState} from './parking_space/types';

type MapProps = {
  vehicle?: VehicleState;
  parkingLot?: ParkingLotState;
  parkingSide?: ParkingSideState;
  parkingSpace?: ParkingSpaceState;
  getParkingSide?: (side_id: string) => ParkingSide | undefined;
  getParkingSpace?: (
    side_id: string,
    space_id: string
  ) => ParkingSpace | undefined;
  getParkSideOfVehicle?: (vehicle_id: string) => {
    parkside_id: string;
    parkspace?: ParkingSpace;
  };
  getVehicle?: (vehicle_id: string) => Vehicle | undefined;
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
    addVehicle?: (payload: any) => ReduxAction;
    updateParkingSpace?: (payload: any) => ReduxAction;
    updateParkingSide?: (payload: any) => ReduxAction;
    updateVehicle?: (payload: any) => ReduxAction;
    addEntryPoint?: (payload: any) => ReduxAction;
    addParkingSide?: (payload: any) => ReduxAction;
    addParkingSpace?: (payload: any) => ReduxAction;
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
