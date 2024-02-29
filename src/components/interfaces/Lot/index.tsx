import React from 'react';

import {LotState} from './types';

class Lot<T> extends React.PureComponent<T, LotState> {}

export default Lot;
