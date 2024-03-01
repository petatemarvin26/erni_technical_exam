import {SIZE} from 'constants/enums';

const getSize = (value: string) => {
  switch (value.toLowerCase().trim()) {
    case 's':
      return SIZE.SMALL;
    case 'm':
      return SIZE.MEDIUM;
    case 'l':
      return SIZE.LARGE;

    default:
      throw Error("Size can't find");
  }
};

export {getSize};
