import {ConnectedProps, connect} from 'react-redux';

import {addVehicle, updateVehicle} from './vehicle';
import {updateParkingSpace} from './parking_space';
import {updateParkingSide} from './parking_side';
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
  addVehicle: (payload) => dispatch(addVehicle(payload)),
  updateParkingSpace: (payload) => dispatch(updateParkingSpace(payload)),
  updateParkingSide: (payload) => dispatch(updateParkingSide(payload)),
  updateVehicle: (payload) => dispatch(updateVehicle(payload))
});

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

export type {Props};
export default connector;
