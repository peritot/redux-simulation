import * as types from '@/store/types';

export const increment = () => ({ type: types.COUNT_INCREMENT });
export const decrement = () => ({ type: types.COUNT_DECREMENT });
