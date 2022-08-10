import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header-main.css';
import PropTypes from 'prop-types';
import cartIcon1 from '../icons/iconCart1.png';
import CartInfo from './CartInfo';

export default class Header extends Component {
  render() {
    const { count } = this.props;

    return (
      <header>
        <nav>
          <Link to="/">
            <h2 className="logo-header">
              <span>18</span>
              Store
            </h2>
          </Link>
          <a className="link-nav" href="*">Sobre nós</a>
          <a className="link-nav" href="*">Contato</a>
          <a className="link-nav" href="*">Avaliações</a>
        </nav>
        <Link className="cartIcon" to="/cart">
          <img src={ cartIcon1 } alt="Icone de carrinho" />
          <CartInfo count={ count } />
        </Link>
      </header>
    );
  }
}

Header.propTypes = {
  count: PropTypes.number.isRequired,
};
