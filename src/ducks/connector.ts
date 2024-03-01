import {ConnectedProps, connect} from 'react-redux';

import {addVehicle, updateVehicle} from './vehicle';
import {updateParkingSpace} from './parking_space';
import {
  addParkingSide,
  addParkingSpace,
  updateParkingSide
} from './parking_side';
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
  getParkingSpace: (side_id, space_id) => {
    let data;
    parkingSide?.data.forEach((parkside) => {
      if (parkside.id === side_id) {
        parkside.parking_spaces.forEach((parkspace) => {
          if (parkspace.id === space_id) {
            data = parkspace;
          }
        });
      }
    });
    return data;
  },
  getParkSideOfVehicle: (vehicle_id) => {
    let data: any = {};
    parkingSide?.data.forEach((parkside) => {
      parkside.parking_spaces.forEach((parkspace) => {
        if (parkspace.vehicle_id === vehicle_id) {
          data['parkside_id'] = parkside.id;
          data['parkspace'] = parkspace;
        }
      });
    });
    return data;
  }
});

const mapDispatch: MapDispatch = (dispatch) => ({
  dispatch: (action) => dispatch(action),
  addVehicle: (payload) => dispatch(addVehicle(payload)),
  updateParkingSpace: (payload) => dispatch(updateParkingSpace(payload)),
  updateParkingSide: (payload) => dispatch(updateParkingSide(payload)),
  updateVehicle: (payload) => dispatch(updateVehicle(payload)),
  addEntryPoint: (payload) => dispatch(addEntryPoint(payload)),
  addParkingSide: (payload) => dispatch(addParkingSide(payload)),
  addParkingSpace: (payload) => dispatch(addParkingSpace(payload))
});

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

export type {Props};
export default connector;
