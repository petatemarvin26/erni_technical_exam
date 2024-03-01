import {Props as ReduxProps} from 'ducks';

type Props = ReduxProps;

type State = {
  vehicle_id: string;
  vehicle_size: string;
  entry_id: string;
  entry_spaces: number;
};

export type {Props, State};
