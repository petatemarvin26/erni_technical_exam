import {ReactNode} from 'react';

import {Props, connector} from 'ducks';
import {ParkingSpace} from 'components';
import {Side} from 'components/interfaces';

import styles from './styles.css';

class ParkingSide extends Side<Props> {
  render(): ReactNode {
    const {side_id, getParkingSide = () => {}} = this.props;
    const parking_side = getParkingSide(side_id);

    const renderParkingSpaces = parking_side?.parking_spaces.map((props, i) => (
      <ParkingSpace key={i} {...props} />
    ));

    return (
      <div className={styles['parking-side']}>
        <div className={styles['parking-space-list']}>
          {renderParkingSpaces}
        </div>
        <h4>{side_id}</h4>
        <div className={styles['entrance-n-exit']}>ENTRANCE / EXIT</div>
      </div>
    );
  }
}

export default connector(ParkingSide);
