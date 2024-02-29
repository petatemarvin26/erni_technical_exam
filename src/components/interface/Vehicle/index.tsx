import React from 'react';

import {VehicleProps, VehicleState} from './types';

class Vehicle extends React.PureComponent<VehicleProps, VehicleState> {
  constructor(props: VehicleProps) {
    super(props);

    this.state = {
      is_park: false
    };
  }

  park() {}
  unpark() {}
}

export default Vehicle;
