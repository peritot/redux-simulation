/* eslint-disable no-console */
// import { applyMiddleware, createStore } from 'redux';
import { applyMiddleware, createStore } from '@/redux';
import reducer from '@/store/reducers';
import logger from '@/store/middlewares/logger';
import thunk from '@/store/middlewares/thunk';

const store = createStore(reducer, applyMiddleware(logger, thunk));

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));

export default store;
