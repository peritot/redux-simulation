const thunk = () => {
  return (next) => {
    return (action) => {
      // eslint-disable-next-line no-console
      console.log('thunk');

      next(action);
    };
  };
};

export default thunk;
