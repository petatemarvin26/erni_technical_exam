import {AppDispatch, SET_STATUS} from './types';

const setAppStatus: AppDispatch = (payload) => ({
  type: SET_STATUS,
  payload
});

export {setAppStatus};
