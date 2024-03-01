import {SIZE} from 'constants/enums';
import {getSize} from './helper';

const isSizeFit = (vehicle_size: SIZE, parkspace_size: string) => {
  const SIZE_LEN = {
    [SIZE.SMALL]: 0,
    [SIZE.MEDIUM]: 1,
    [SIZE.LARGE]: 2
  };

  if (SIZE_LEN[vehicle_size] > SIZE_LEN[getSize(parkspace_size)]) {
    return false;
  }

  return true;
};
export {isSizeFit};
