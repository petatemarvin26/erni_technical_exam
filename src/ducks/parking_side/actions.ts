import {ParkingSideDispatch, SET_PARKINGSIDES} from './types';

const setParkingSides: ParkingSideDispatch = (payload) => ({
  type: SET_PARKINGSIDES,
  payload
});

export {setParkingSides};
