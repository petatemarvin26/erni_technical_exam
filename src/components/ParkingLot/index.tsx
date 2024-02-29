import ParkingSide from 'components/ParkingSide';
import {Lot} from 'components/interfaces';
import {connector, Props} from 'ducks';
import {ReactNode} from 'react';

class ParkingLot extends Lot<Props> {
  componentDidMount(): void {}

  render(): ReactNode {
    const {entry_points} = this.state;

    const renderParkingSides = Array.from({length: entry_points}).map(
      (_, i) => <ParkingSide side_id={i}></ParkingSide>
    );
    return <div>{renderParkingSides}</div>;
  }
}

export default connector(ParkingLot);
