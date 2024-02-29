type Status = 'available' | 'unavailable' | 'reserved';

type SpaceProps = {
  side_id: number;
};

type SpaceState = {
  status: Status;
};

const SPACE_AVAIL: Status = 'available';
const SPACE_UNAVAIL: Status = 'unavailable';
const SPACE_RESRV: Status = 'reserved';

export type {SpaceProps, SpaceState};
export {SPACE_AVAIL, SPACE_UNAVAIL, SPACE_RESRV};
