import {configureStore} from '@reduxjs/toolkit';

import connector, {Props} from './connector';
import rootReducer from './reducer';

const store = configureStore({
  reducer: rootReducer()
});

export {store, connector};
export type {Props};
