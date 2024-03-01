import {ConnectedProps, connect} from 'react-redux';

// import {setEntryPoint} from './parking_lot';
import {MapDispatch, MapState} from './types';

const mapState: MapState = ({parkingLot, parkingSide, parkingSpace}) => ({
  parkingLot,
  parkingSide,
  getParkingSide: (side_id: string) =>
    parkingSide?.data.find(({id}) => id === side_id),
  parkingSpace
});

const mapDispatch: MapDispatch = (dispatch) => ({
  dispatch: (action) => dispatch(action)
  // setEntryPoint: (payload) => dispatch(setEntryPoint(payload))
});

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

export type {Props};
export default connector;
