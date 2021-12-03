import { combineReducers } from '@/redux';
import counterReducer from './counter.reducer';

export default combineReducers({
  count: counterReducer,
});
