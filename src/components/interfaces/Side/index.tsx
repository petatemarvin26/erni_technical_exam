import React from 'react';

import {SideProps, SideState} from './types';

class Side extends React.PureComponent<SideProps, SideState> {
  constructor(props: SideProps) {
    super(props);

    this.state = {
      side_id: props.side_id
    };
  }
}

export default Side;
