import {Vehicle} from 'components/interfaces';

class Car extends Vehicle {
  handlePark() {
    this.park();
  }
  handleUnpark() {
    this.unpark();
  }
}

export default Car;
