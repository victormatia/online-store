export function filterProducts(param) {
  return param
    .reduce((acc, curr) => {
      if (!acc.includes(curr.title)) {
        acc.push(curr.title);
        return acc;
      } return acc;
    }, [])
    .map((title) => param.find((el) => el.title === title));
}

export const updateCounter = (param) => param.setState((pS) => ({ count: pS.count + 1 }));
