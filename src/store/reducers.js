import { combineReducers } from 'redux';

import advisors from './advisors/reducer';
import ui from './ui/reducer';

export default combineReducers({
  advisors,
  ui,
});
