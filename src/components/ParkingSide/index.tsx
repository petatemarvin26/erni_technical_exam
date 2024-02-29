import {ReactNode} from 'react';

import {Props, connector} from 'ducks';
import {ParkingSpace} from 'components';
import {Side} from 'components/interfaces';

class ParkingSide extends Side<Props> {
  render(): ReactNode {
    const {side_id, parking_spaces} = this.props;

    const renderParkingSpaces = parking_spaces?.map(({status, vehicle}, i) => (
      <ParkingSpace key={i} status={status} vehicle={vehicle}></ParkingSpace>
    ));

    return (
      <div>
        <h4>PARKING SIDE {side_id}</h4>
        <div>{renderParkingSpaces}</div>
      </div>
    );
  }
}

export default connector(ParkingSide);
