import {SIZE} from 'constants/enums';

const getSize = (value: string) => {
  switch (value) {
    case 'S':
      return SIZE.SMALL;
    case 'M':
      return SIZE.MEDIUM;
    case 'L':
      return SIZE.LARGE;

    default:
      throw Error("Size can't find");
  }
};

export {getSize};
