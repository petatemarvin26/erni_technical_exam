import {AppReducer, AppState, SET_STATUS} from './types';
import {setAppStatus} from './actions';

const initState: AppState = {
  data: {
    status: 'initializing'
  }
};

const app: AppReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_STATUS: {
      const status = action.payload ?? state.data?.status;
      return {data: {status}};
    }

    default:
      return state;
  }
};

export {setAppStatus};
export default app;
