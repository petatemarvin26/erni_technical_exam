import {Props as ReduxProps} from 'ducks';

type Props = ReduxProps;

type State = {
  vehicle_id: string;
  vehicle_size: string;
  entry_id: string;
  entry_spaces: number;
  space_entry_id: string;
  space_id: string;
  space_size: string;
};

export type {Props, State};
