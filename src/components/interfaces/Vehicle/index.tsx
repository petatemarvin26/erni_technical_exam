import React from 'react';

import {VehicleProps, VehicleState} from './types';

class Vehicle<T> extends React.PureComponent<T & VehicleProps, VehicleState> {
  park() {}
  unpark() {}
}

export default Vehicle;
