import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  getProductFromLS,
  setProductToLS,
} from '../services/localStorage';
import { filterProducts } from '../services/services';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartProducts: [],
      filteredProducts: [],
    };
  }

  componentDidMount = () => {
    const cartProducts = JSON.parse(getProductFromLS());
    this.setState({
      cartProducts,
      filteredProducts: filterProducts(cartProducts),
    });
  }

  componentDidUpdate = () => {
    const { cartProducts } = this.state;
    setProductToLS(JSON.stringify(cartProducts));
  }

  quantityOfSameProds = (param) => {
    const { cartProducts } = this.state;
    return cartProducts.filter(({ id }) => (id === param)).length;
  }

  handleQuantity = ({ target }) => {
    const { name, id } = target;
    const { cartProducts } = this.state;

    if (name === 'remove') {
      const removeAllSimilarProducts = cartProducts
        .filter((product) => product.id !== id);
      this.setState({
        cartProducts: removeAllSimilarProducts,
        filteredProducts: filterProducts(removeAllSimilarProducts) });
    }

    if (name === 'decrease') {
      cartProducts.splice(id, 1); // params: index que quer remover, e quantos quer remover
      this.setState({ cartProducts });
    }

    if (name === 'increase') {
      const productToAdd = cartProducts.find((el) => el.id === id);
      this.setState((prevState) => ({
        cartProducts: [...prevState.cartProducts, productToAdd],
      }));
    }
  }

  render() {
    const { filteredProducts } = this.state;
    const minQuantity = 1;

    return (
      <div>
        {
          !filteredProducts.length ? (
            <span
              data-testid="shopping-cart-empty-message"
            >
              Seu carrinho está vazio.
            </span>
          ) : (
            filteredProducts.map((product, index) => (
              <div key={ index }>
                <img src={ product.thumbnail } alt={ product.title } />
                <h3 data-testid="shopping-cart-product-name">{ product.title }</h3>
                <p>{ product.price }</p>
                <p>{ `Quantidade disponivel: ${product.available_quantity}` }</p>
                <button
                  type="button"
                  name="decrease"
                  id={ index }
                  data-testid="product-decrease-quantity"
                  onClick={ this.handleQuantity }
                  disabled={
                    this.quantityOfSameProds(product.id)
                    === minQuantity
                  }
                >
                  -
                </button>
                <p
                  data-testid="shopping-cart-product-quantity"
                >
                  { this.quantityOfSameProds(product.id) }
                </p>
                <button
                  type="button"
                  name="increase"
                  id={ product.id }
                  data-testid="product-increase-quantity"
                  onClick={ this.handleQuantity }
                  disabled={
                    this.quantityOfSameProds(product.id)
                    === product.available_quantity
                  }
                >
                  +
                </button>
                <button
                  type="button"
                  name="remove"
                  id={ product.id }
                  data-testid="remove-product"
                  onClick={ this.handleQuantity }
                >
                  Remover
                </button>
              </div>
            ))
          )
        }
        <Link to="/checkout" data-testid="checkout-products">Fechar pedido</Link>
      </div>
    );
  }
}
