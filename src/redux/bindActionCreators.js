function bindActionCreator(actionCreator, dispatch) {
  return function (...args) {
    return dispatch(actionCreator.apply(this, args));
  };
}

/**
 * @param {Function|Object} actionCreators An object whose values are action creator functions.
 * @param {Function} dispatch The `dispatch` function available on your Redux store.
 * @returns {Function|Object} The object mimicking the original object, but with every action creator wrapped into the `dispatch` call.
 */
export default function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function.');
  }

  const boundActionCreators = {};
  Object.keys(actionCreators).forEach((key) => {
    const actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  });

  return boundActionCreators;
}
