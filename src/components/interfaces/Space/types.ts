import {VehicleProps} from 'components/interfaces/Vehicle/types';

type Status = 'available' | 'unavailable' | 'reserved';

type SpaceProps = {
  status: Status;
  vehicle: VehicleProps;
};

type SpaceState = {};

const SPACE_AVAIL: Status = 'available';
const SPACE_UNAVAIL: Status = 'unavailable';
const SPACE_RESRV: Status = 'reserved';

export type {SpaceProps, SpaceState};
export {SPACE_AVAIL, SPACE_UNAVAIL, SPACE_RESRV};
