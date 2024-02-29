import React from 'react';

import {SideProps, SideState} from './types';

class Side<T> extends React.PureComponent<T & SideProps, SideState> {}

export default Side;
