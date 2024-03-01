import {ReactNode} from 'react';

import {Vehicle} from 'components/interfaces';

import styles from './styles.css';
import {Props, connector} from 'ducks';
import {VehicleProps, VehicleState} from 'components/interfaces/Vehicle/types';
import {isSizeFit} from 'utils/cheker';

class Car extends Vehicle<Props> {
  timer?: NodeJS.Timeout;
  constructor(props: VehicleProps) {
    super(props);

    this.state = {
      side: '',
      space: ''
    };
  }

  handlePark = () => {
    const {
      vehicle_id,
      getVehicle = () => {},
      getParkingSpace = () => {},
      updateParkingSide = () => {},
      updateVehicle = () => {}
    } = this.props;
    const {side, space} = this.state;
    const vehicle = getVehicle(vehicle_id)!;
    const parkspace = getParkingSpace(side, space)!;

    // validate if fit or not
    try {
      if (!isSizeFit(vehicle?.size!, parkspace?.size!)) {
        console.log('Vehicle is not fit');
        return;
      }
    } catch (err) {
      console.log('Vehicle park slot does not exist');
      return;
    }

    updateParkingSide({
      id: side,
      space_id: space,
      vehicle_id,
      status: 'unavailable'
    });
    const time_start = new Date();
    updateVehicle({
      id: vehicle_id,
      did_park: true,
      charge: 40,
      time_start:
        time_start.toLocaleDateString() +
        ' - ' +
        time_start.toLocaleTimeString()
    });
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
      space_id: vehicle.parkspace?.id,
      vehicle_id: undefined,
      status: 'available'
    });
    updateVehicle({id: vehicle_id, did_park: false, charge: 0, time_start: ''});
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
          {vehicle.time_start && (
            <p className={styles['time-consume']}>{vehicle.time_start}</p>
          )}
          {vehicle.charge > 0 && (
            <p className={styles['time-consume']}>₱{vehicle.charge}</p>
          )}
        </div>
      </div>
    );
  }
}

export default connector(Car);
