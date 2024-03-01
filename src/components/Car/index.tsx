import {ReactNode} from 'react';

import {Vehicle} from 'components/interfaces';

import styles from './styles.css';
import {Props, connector} from 'ducks';

class Car extends Vehicle<Props> {
  handlePark() {
    this.park();
  }
  handleUnpark() {
    this.unpark();
  }

  render(): ReactNode {
    const {vehicle_id, getVehicle} = this.props;
    const vehicle = getVehicle!(vehicle_id);

    if (!vehicle) return null;

    return (
      <div className={styles['car']}>
        <div className={styles['title']}>
          {vehicle_id} ({vehicle?.size})
        </div>
        <div className={styles['action']}>
          <button>PARK</button>
        </div>
      </div>
    );
  }
}

export default connector(Car);
