import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartInfo extends Component {
  render() {
    const { count } = this.props;
    return (
      <span data-testid="shopping-cart-size">{count}</span>
    );
  }
}

CartInfo.propTypes = {
  count: PropTypes.number.isRequired,
};
