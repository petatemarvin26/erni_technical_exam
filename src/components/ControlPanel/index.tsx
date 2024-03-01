import React from 'react';

import CarList from 'components/CarList';

import styles from './styles.css';

class ControlPanel extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <div className={styles['ctrl-panel']}>
        <div className={styles['left-ctrl-panel']}>
          <CarList />
        </div>
        <div className={styles['right-ctrl-panel']}>
          <div className={styles['content']}>
            ADD CAR
            <input />
          </div>
          <div className={styles['content']}>
            <button>ADD ENTRY POINT</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ControlPanel;
