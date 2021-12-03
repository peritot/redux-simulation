/**
 * @param reducer A function that returns the next state tree
 * @param [preloadedState] The initial state
 * @param [enhancer] The store enhancer
 */
export default function createStore(reducer, preloadedState, enhancer) {
  if (typeof reducer !== 'function') {
    throw new Error('Expected the root reducer to be a function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  let currentState = preloadedState;
  const currentListeners = [];

  function getState() {
    return currentState;
  }

  function dispatch(action) {
    if (Object.prototype.toString.call(action) !== '[object Object]') {
      throw new Error('Actions must be plain objects.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }

    currentState = reducer(currentState, action);

    const listeners = currentListeners;
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }

    return action;
  }

  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    currentListeners.push(listener);
  }

  dispatch({ type: '@@redux/INIT' });

  return {
    getState,
    dispatch,
    subscribe,
  };
}
