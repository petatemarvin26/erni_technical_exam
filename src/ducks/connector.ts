import {ConnectedProps, connect} from 'react-redux';

import {setEntryPoint} from './parking_lot';
import {MapDispatch, MapState} from './types';

const mapState: MapState = ({parkingLot}) => ({
  parkingLot
});

const mapDispatch: MapDispatch = (dispatch) => ({
  setEntryPoint: (payload) => dispatch(setEntryPoint(payload))
});

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

export type {Props};
export default connector;
