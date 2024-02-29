import {SpaceProps} from 'components/interfaces/Space/types';

type SideProps = {
  side_id: number;
  parking_spaces?: Array<SpaceProps>;
  children?: any;
};

type SideState = {
  side_id: number;
};

export type {SideProps, SideState};
