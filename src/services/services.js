export function filterProducts(param) {
  const filteredProducts = [];

  param.reduce((acc, curr) => {
    if (!acc.includes(curr.title)) {
      acc.push(curr.title);
      return acc;
    } return acc;
  }, []).forEach((title) => {
    filteredProducts.push(param.find((el) => el.title === title));
  }); return filteredProducts;
}

export const updateCounter = (param) => param.setState((pS) => ({ count: pS.count + 1 }));
