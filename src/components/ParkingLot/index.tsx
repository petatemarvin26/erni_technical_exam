import {ReactNode} from 'react';

import {connector, Props} from 'ducks';

import {Lot} from 'components/interfaces';
// import {ParkingSideHoc} from 'hoc';
import ParkingSide from 'components/ParkingSide';

import styles from './styles.css';

class ParkingLot extends Lot<Props> {
  componentDidMount(): void {}

  render(): ReactNode {
    const {parkingLot} = this.props;
    // const entry_pts = parkingLot?.data.entry_points || 0;

    const renderParkingSides = parkingLot?.data.parking_sides.map((id) => (
      <ParkingSide key={id} side_id={id} />
    ));
    return <div className={styles['parking-lot']}>{renderParkingSides}</div>;
  }
}

export default connector(ParkingLot);
