import React from 'react';
import loadable from '@loadable/component';

import { Loading } from '../components';

const fallback = { fallback: <Loading /> };

export const Advisors = loadable(() => import('./Advisors'), fallback);
export const Advisor = loadable(() => import('./Advisor'), fallback);
