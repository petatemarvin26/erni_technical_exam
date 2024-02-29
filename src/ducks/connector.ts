import {ConnectedProps, connect} from 'react-redux';

import {setAppStatus} from './app';
import {MapDispatch, MapState} from './types';

const mapState: MapState = ({app}) => ({
  app
});

const mapDispatch: MapDispatch = (dispatch) => ({
  setAppStatus: (payload) => dispatch(setAppStatus(payload))
});

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

export type {Props};
export default connector;
