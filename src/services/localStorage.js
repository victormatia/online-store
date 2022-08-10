// Produtos do carrinho
export const setProductToLS = (prod) => localStorage.setItem('products', prod);

export function getProductFromLS() {
  if (!JSON.parse(localStorage.getItem('products'))) {
    localStorage.setItem('products', JSON.stringify([]));
  }
  return localStorage.getItem('products');
}

// Avaliações dos usuários
export const setEvaluationToLS = (id, rating) => localStorage.setItem(id, rating);

export function getEvaluationFromLS(id) {
  if (!JSON.parse(localStorage.getItem(id))) {
    localStorage.setItem(id, JSON.stringify([]));
  }
  return localStorage.getItem(id);
}
