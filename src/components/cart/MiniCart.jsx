import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeFromCart, reduceCartItem, addToCart } from '../../actions/cart-actions';
import MiniCartItem from './MiniCartItem';

class MiniCart extends Component {
  handleDeleteItem = (id) => {
    const cartItem = this.props.cartItems.find((item) => item.id === id);
    this.props.removeFromCart(cartItem);
  };

  handleReduceItem = (id) => {
    const cartItem = this.props.cartItems.find((item) => item.id === id);
    if (cartItem.quantity == 1) {
      this.props.removeFromCart(cartItem);
    } else {
      this.props.reduceCartItem(cartItem);
    }
  };

  handleAddItem = (id) => {
    const cartItem = this.props.cartItems.find((item) => item.id === id);
    this.props.addToCart(cartItem);
  };
  render() {
    const { cartItems, total, count } = this.props;

    return (
      <>
        <a href="#">
          <i className="fas fa-shopping-cart" />
          {count ? <span className="cart-count">{count}</span> : ''}
        </a>
        <ul className="minicart">
          {cartItems.map((item) => (
            <MiniCartItem key={item.id} {...item} onDelete={this.handleDeleteItem} onReduce={this.handleReduceItem} onAdd={this.handleAddItem}/>
          ))}
          <li>
            <div className="total-price">
              <span className="f-left">Total:</span>
              <span className="f-right">${total}</span>
            </div>
          </li>
          <li>
            <div className="checkout-link">
              <a href="#">Shopping Cart</a>
              <a className="red-color" href="#">
                Checkout
              </a>
            </div>
          </li>
        </ul>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.cart.items.reduce((quantity, item) => quantity + item.quantity, 0),
    cartItems: state.cart.items,
    total: state.cart.total,
  };
}

const mapDispatchToProps = {
  removeFromCart,
  reduceCartItem,
  addToCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MiniCart);
