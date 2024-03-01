import {ConnectedProps, connect} from 'react-redux';

import {addVehicle} from './vehicle';
import {MapDispatch, MapState} from './types';

const mapState: MapState = ({
  vehicle,
  parkingLot,
  parkingSide,
  parkingSpace
}) => ({
  vehicle,
  getVehicle: (vehicle_id: string) =>
    vehicle?.data.find(({id}) => id === vehicle_id),
  parkingLot,
  parkingSide,
  getParkingSide: (side_id: string) =>
    parkingSide?.data.find(({id}) => id === side_id),
  parkingSpace
});

const mapDispatch: MapDispatch = (dispatch) => ({
  dispatch: (action) => dispatch(action),
  addVehicle: (payload) => dispatch(addVehicle(payload))
});

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

export type {Props};
export default connector;
