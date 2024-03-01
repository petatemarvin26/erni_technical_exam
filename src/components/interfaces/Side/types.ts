import {ParkingSpace} from 'ducks/parking_space/types';

type SideProps = {
  side_id: string;
  parking_spaces?: Array<ParkingSpace>;
  children?: any;
};

type SideState = {
  side_id: string;
};

export type {SideProps, SideState};
