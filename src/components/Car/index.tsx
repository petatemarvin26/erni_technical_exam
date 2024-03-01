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
    return <div className={styles['car']}>{name}</div>;
  }
}

export default Car;
