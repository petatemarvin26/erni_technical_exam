import {ConnectedProps, connect} from 'react-redux';

import {addVehicle, updateVehicle} from './vehicle';
import {updateParkingSpace} from './parking_space';
import {addParkingSide, updateParkingSide} from './parking_side';
import {addEntryPoint} from './parking_lot';
import {MapDispatch, MapState} from './types';

const mapState: MapState = ({
  vehicle,
  parkingLot,
  parkingSide,
  parkingSpace
}) => ({
  vehicle,
  getVehicle: (vehicle_id) => vehicle?.data.find(({id}) => id === vehicle_id),
  parkingLot,
  parkingSide,
  getParkingSide: (side_id) => parkingSide?.data.find(({id}) => id === side_id),
  getParkSideOfVehicle: (vehicle_id) => {
    let data = {parkside_id: '', parkspace_id: ''};
    parkingSide?.data.forEach((parkside) => {
      parkside.parking_spaces.forEach((parkspace) => {
        if (parkspace.vehicle_id === vehicle_id) {
          data['parkside_id'] = parkside.id;
          data['parkspace_id'] = parkspace.id;
        }
      });
    });
    return data;
  },
  parkingSpace
});

const mapDispatch: MapDispatch = (dispatch) => ({
  dispatch: (action) => dispatch(action),
  addVehicle: (payload) => dispatch(addVehicle(payload)),
  updateParkingSpace: (payload) => dispatch(updateParkingSpace(payload)),
  updateParkingSide: (payload) => dispatch(updateParkingSide(payload)),
  updateVehicle: (payload) => dispatch(updateVehicle(payload)),
  addEntryPoint: (payload) => dispatch(addEntryPoint(payload)),
  addParkingSide: (payload) => dispatch(addParkingSide(payload))
});

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

export type {Props};
export default connector;
