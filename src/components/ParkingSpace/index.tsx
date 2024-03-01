import {ReactNode} from 'react';

import {Props, connector} from 'ducks';
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
    const {id, size, vehicle_id, getVehicle} = this.props;
    const vehicle = getVehicle!(vehicle_id!);
    return (
      <div className={`${styles['parking-space']} ${this.getColorStatus()}`}>
        {id} - {size}
        {vehicle?.did_park && <Car vehicle_id={vehicle_id!} />}
      </div>
    );
  }
}

export default connector(ParkingSpace);
