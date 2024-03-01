import {ReactNode} from 'react';

import {Vehicle} from 'components/interfaces';

import styles from './styles.css';
import {Props, connector} from 'ducks';
import {VehicleProps, VehicleState} from 'components/interfaces/Vehicle/types';

class Car extends Vehicle<Props> {
  constructor(props: VehicleProps) {
    super(props);

    this.state = {
      side: '',
      space: ''
    };
  }

  handlePark = () => {
    const {side, space} = this.state;
    const {
      vehicle_id,
      updateParkingSide = () => {},
      updateVehicle = () => {}
    } = this.props;

    updateParkingSide({
      id: side,
      space_id: space,
      vehicle_id,
      status: 'unavailable'
    });
    updateVehicle({id: vehicle_id, did_park: true});
    this.setState({side: '', space: ''});
  };
  handleUnpark = () => {
    const {getParkSideOfVehicle = () => {}} = this.props;
    const {
      vehicle_id,
      updateParkingSide = () => {},
      updateVehicle = () => {}
    } = this.props;

    const vehicle = getParkSideOfVehicle(vehicle_id)!;

    updateParkingSide({
      id: vehicle.parkside_id,
      space_id: vehicle.parkspace_id,
      vehicle_id: undefined,
      status: 'available'
    });
    updateVehicle({id: vehicle_id, did_park: false});
  };

  handleChange =
    (key: keyof VehicleState) => (ae: React.ChangeEvent<HTMLInputElement>) => {
      this.setState((prev) => ({...prev, [key]: ae.target.value}));
    };

  render(): ReactNode {
    const {vehicle_id, getVehicle} = this.props;
    const {side, space} = this.state;
    const vehicle = getVehicle!(vehicle_id);
    const did_park = vehicle?.did_park;

    if (!vehicle) return null;

    return (
      <div className={styles['car']}>
        <div className={styles['title']}>
          {vehicle_id} ({vehicle?.size})
        </div>
        <div className={styles['action']}>
          {!did_park && (
            <div className={styles['fields']}>
              <input
                placeholder='Side'
                value={side}
                onChange={this.handleChange('side')}
              />
              <input
                placeholder='Space'
                value={space}
                onChange={this.handleChange('space')}
              />
            </div>
          )}
          <button onClick={!did_park ? this.handlePark : this.handleUnpark}>
            {!did_park ? 'PARK' : 'UNPARK'}
          </button>
        </div>
      </div>
    );
  }
}

export default connector(Car);
