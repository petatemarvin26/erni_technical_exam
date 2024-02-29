import {Vehicle} from 'components/interfaces';

type Status = 'available' | 'unavailable' | 'reserved';

type SpaceProps = {
  side_id: number;
};

type SpaceState = {
  side_id: number;
  status: Status;
  vehicle?: Vehicle;
};

const SPACE_AVAIL: Status = 'available';
const SPACE_UNAVAIL: Status = 'unavailable';
const SPACE_RESRV: Status = 'reserved';

export type {SpaceProps, SpaceState};
export {SPACE_AVAIL, SPACE_UNAVAIL, SPACE_RESRV};
