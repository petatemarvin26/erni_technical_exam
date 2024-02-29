import React from 'react';

import {SpaceProps, SpaceState} from './types';

class Space<T> extends React.PureComponent<T & SpaceProps, SpaceState> {}

export default Space;
