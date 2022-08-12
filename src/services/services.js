export const filterProducts = (prod) => (prod.reduce((acc, curr) => (
  !acc.find(({ id }) => id === curr.id) ? [...acc, curr] : acc), []));

export const updateCounter = (param) => param.setState((pS) => ({ count: pS.count + 1 }));
