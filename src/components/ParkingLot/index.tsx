import {ReactNode} from 'react';

import {connector, Props} from 'ducks';

import {Lot} from 'components/interfaces';
import ParkingSide from 'components/ParkingSide';

import styles from './styles.css';

class ParkingLot extends Lot<Props> {
  componentDidMount(): void {}

  render(): ReactNode {
    const {parkingLot} = this.props;
    const entry_pts = parkingLot?.data.entry_points || 0;

    const renderParkingSides = Array.from({length: entry_pts}).map((_, i) => (
      <ParkingSide key={i} side_id={i}></ParkingSide>
    ));
    return <div className={styles['parking-lot']}>{renderParkingSides}</div>;
  }
}

export default connector(ParkingLot);
