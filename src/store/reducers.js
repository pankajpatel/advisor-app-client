import { combineReducers } from 'redux';

import advisors from './advisors/reducer';
import advisor from './advisor/reducer';
import ui from './ui/reducer';

export default combineReducers({
  advisors,
  advisor,
  ui,
});
