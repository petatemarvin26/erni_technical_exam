import React from 'react';

import {ParkProps, ParkState} from './types';

class Lot extends React.PureComponent<ParkProps, ParkState> {
  constructor(props: ParkProps) {
    super(props);

    this.state = {
      entry_points: 3,
      width: 500,
      height: 300
    };
  }
}

export default Lot;
