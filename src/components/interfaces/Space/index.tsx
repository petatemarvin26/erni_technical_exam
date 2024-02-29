import React from 'react';

import {SpaceProps, SpaceState, SPACE_AVAIL} from './types';

class Space extends React.PureComponent<SpaceProps, SpaceState> {
  constructor(props: SpaceProps) {
    super(props);

    this.state = {
      side_id: props.side_id,
      status: SPACE_AVAIL
    };
  }
}

export default Space;
