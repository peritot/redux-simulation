/**
 * @param {Object} reducers An object whose values correspond to different reducer functions that need to be combined into one.
 */
export default function combineReducers(reducers) {
  const keys = Object.keys(reducers);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const reducer = reducers[key];

    if (typeof reducer !== 'function') {
      throw new Error('Expected the reducer to be a function.');
    }
  }

  return function combination(state = {}, action) {
    const nextState = {};

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const reducer = reducers[key];
      const previousStateForKey = state[key];

      nextState[key] = reducer(previousStateForKey, action);
    }

    return nextState;
  };
}
