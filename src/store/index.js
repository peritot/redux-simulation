/* eslint-disable no-console */
import { createStore } from '@/redux';
import reducer from '@/store/reducers';

const store = createStore(reducer);

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));

export default store;
