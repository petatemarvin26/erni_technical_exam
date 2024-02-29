import {Vehicle} from 'components/interface';

class Car extends Vehicle {
  handlePark() {
    this.park();
  }
  handleUnpark() {
    this.unpark();
  }
}

export default Car;
