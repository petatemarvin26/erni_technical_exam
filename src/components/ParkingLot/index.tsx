import {ReactNode} from 'react';

import {Lot} from 'components/interfaces';
import ParkingSide from 'components/ParkingSide';

import {connector, Props} from 'ducks';
class ParkingLot extends Lot<Props> {
  componentDidMount(): void {}

  render(): ReactNode {
    const {parkingLot} = this.props;
    const entry_pts = parkingLot.data.entry_points;

    const renderParkingSides = Array.from({length: entry_pts}).map((_, i) => (
      <ParkingSide key={i} side_id={i}></ParkingSide>
    ));
    return <div>{renderParkingSides}</div>;
  }
}

export default connector(ParkingLot);
