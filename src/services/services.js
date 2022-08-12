export const filterProducts = (param) => (param.reduce((acc, curr) => (
  !acc.filter(({ id }) => id === curr.id).length ? [...acc, curr] : acc), []));

export const updateCounter = (param) => param.setState((pS) => ({ count: pS.count + 1 }));
