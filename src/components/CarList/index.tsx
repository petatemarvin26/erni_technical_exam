import React from 'react';

import {Props, connector} from 'ducks';
import Car from 'components/Car';

import styles from './styles.css';

class CarList extends React.PureComponent<Props> {
  render(): React.ReactNode {
    const renderCars = this.props.car?.data.map((car, i) => (
      <Car key={i} name={car.name} />
    ));

    return (
      <div className={styles['car-list']}>
        <div className={styles['car-list-content']}>{renderCars}</div>
      </div>
    );
  }
}

export default connector(CarList);
