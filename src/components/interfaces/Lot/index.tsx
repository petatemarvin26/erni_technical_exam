import React from 'react';

import {LotState} from './types';

class Lot<T> extends React.PureComponent<T, LotState> {
  constructor(props: T) {
    super(props);

    this.state = {
      entry_points: 3
    };
  }
}

export default Lot;
