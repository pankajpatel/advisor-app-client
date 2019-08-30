import React from 'react';
import { InView } from 'react-intersection-observer';

export default props => <InView {...props}>{props.children}</InView>;
