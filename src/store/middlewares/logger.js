const logger = (store) => {
  return (next) => {
    return (action) => {
      // eslint-disable-next-line no-console
      console.log('logger', store, action);

      next(action);
    };
  };
};

export default logger;
