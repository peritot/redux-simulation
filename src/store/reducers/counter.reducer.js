import * as types from '@/store/types';

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COUNTER_INCREMENT:
      return state + 1;
    case types.COUNTER_DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default reducer;
