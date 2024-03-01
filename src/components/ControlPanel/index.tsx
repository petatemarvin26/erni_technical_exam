import React from 'react';

import {SIZE} from 'constants/enums';
import CarList from 'components/CarList';

import {Props, State} from './types';
import styles from './styles.css';
import {connector} from 'ducks';
import {getSize} from 'utils/helper';

class ControlPanel extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      vehicle_id: '',
      vehicle_size: ''
    };
  }

  handleChange =
    (key: keyof State) => (ae: React.ChangeEvent<HTMLInputElement>) => {
      this.setState((prev) => ({...prev, [key]: ae.target.value}));
    };

  handleAddVehicle = () => {
    // CONTINUE
    const {vehicle_id, vehicle_size} = this.state;
    const {addVehicle = () => {}} = this.props;
    try {
      const size = getSize(vehicle_size);
      addVehicle!({
        id: vehicle_id,
        size,
        is_park: false
      });
      this.setState({vehicle_id: '', vehicle_size: ''});
    } catch (err) {
      console.log('SIZE IS INVALD');
    }
  };

  render(): React.ReactNode {
    const {vehicle_id, vehicle_size} = this.state;
    return (
      <div className={styles['ctrl-panel']}>
        <div className={styles['left-ctrl-panel']}>
          <CarList />
        </div>
        <div className={styles['right-ctrl-panel']}>
          <div className={styles['content']}>
            <div className={styles['content-row']}>
              <input
                placeholder='Vehicle ID'
                value={vehicle_id}
                onChange={this.handleChange('vehicle_id')}
              />
              <input
                placeholder='Vehicle Size'
                value={vehicle_size}
                onChange={this.handleChange('vehicle_size')}
              />
            </div>
            <button onClick={this.handleAddVehicle}>ADD VEHICLE</button>
          </div>
          <div className={styles['content']}>
            <button>ADD ENTRY POINT</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connector(ControlPanel);
