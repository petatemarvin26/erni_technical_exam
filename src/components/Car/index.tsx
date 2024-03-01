import {ReactNode} from 'react';

import {Vehicle} from 'components/interfaces';

import styles from './styles.css';

class Car extends Vehicle {
  handlePark() {
    this.park();
  }
  handleUnpark() {
    this.unpark();
  }

  render(): ReactNode {
    const {name} = this.props;
    return (
      <div className={styles['car']}>
        <div className={styles['name']}>CAR {name}</div>
        <div className={styles['action']}>
          <button>PARK</button>
        </div>
      </div>
    );
  }
}

export default Car;
