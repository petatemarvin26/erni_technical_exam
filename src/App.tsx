import {ParkingLot} from 'components';

import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={styles['main']}>
      <ParkingLot></ParkingLot>
    </div>
  );
};

export default App;
