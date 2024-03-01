import {ReactNode} from 'react';

import {Props} from 'ducks';
import {Space} from 'components/interfaces';
import Car from 'components/Car';

import styles from './styles.css';

class ParkingSpace extends Space<Props> {
  getColorStatus = () => {
    switch (this.props.status) {
      case 'available':
        return 'green';
      case 'unavailable':
        return 'red';
      case 'reserved':
        return 'yellow';
    }
  };

  render(): ReactNode {
    const {id, vehicle_id} = this.props;
    return (
      <div className={`${styles['parking-space']} ${this.getColorStatus()}`}>
        {id}
        {vehicle_id && <Car vehicle_id={vehicle_id} />}
      </div>
    );
  }
}

export default ParkingSpace;
