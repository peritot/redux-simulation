/**
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions from right to left.
 */
export default function compose(...funcs) {
  return (dispatch) => {
    for (let i = funcs.length - 1; i >= 0; i--) {
      dispatch = funcs[i](dispatch);
    }

    return dispatch;
  };
}
