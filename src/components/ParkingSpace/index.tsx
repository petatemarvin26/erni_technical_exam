import {ReactNode} from 'react';

import {Props} from 'ducks';
import {Space} from 'components/interfaces';

import styles from './styles.css';

class ParkingSpace extends Space<Props> {
  render(): ReactNode {
    return <div className={styles['parking-space']}></div>;
  }
}

export default ParkingSpace;
