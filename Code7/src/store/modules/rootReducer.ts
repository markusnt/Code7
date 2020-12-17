import { combineReducers } from 'redux';

import news from './news/reducer';
import modal from './modal/reducer';

export default combineReducers({
  news,
  modal,
});
