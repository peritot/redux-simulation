import compose from './compose';

/**
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
export default function applyMiddleware(...middlewares) {
  return (createStore) => {
    return (reducer, preloadedState) => {
      const store = createStore(reducer, preloadedState);

      const middlewareAPI = {
        getState: store.getState,
        dispatch: store.dispatch,
      };
      const chain = middlewares.map((middleware) => middleware(middlewareAPI));
      const dispatch = compose(...chain)(store.dispatch);

      return {
        ...store,
        dispatch,
      };
    };
  };
}
