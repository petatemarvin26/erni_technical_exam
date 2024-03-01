import {ReactNode} from 'react';

import {Props} from 'ducks';
import {Space} from 'components/interfaces';

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
    return (
      <div
        className={`${styles['parking-space']} ${this.getColorStatus()}`}
      ></div>
    );
  }
}

export default ParkingSpace;
