import React, { Component } from 'react';

export default class Product extends Component {
  handleCartClick = () => {
    if (typeof this.props.onAddToCart === 'function') {
      this.props.onAddToCart(this.props.id);
    }
  };
  handleDetail = (id) =>{
  };
  render() {
    const { id, name, image, image2, category, discountPrice, price, unitSold } = this.props;

    return (
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="product-wrapper mb-50">
          <div className="product-img mb-25">
            <a className="image-link">
              <img src={image} alt={name} />
              <img className="secondary-img" src={image2} alt={name} />
            </a>
            <div className="product-action text-center">
              <a onClick={this.handleCartClick} title="Add to cart">
                <i className="fas fa-shopping-cart" />
              </a>
              <a title="View details" onClick={() => this.handleDetail(id)}>
                <i className="fas fa-search" />
              </a>
            </div>
          </div>
          <div className="product-content pr-0">
            <div className="pro-cat mb-10">
              <a>{category}</a>
            </div>
            <h4>
              <a>{name}</a>
            </h4>
            <div className="product-meta">
              <div className="pro-price">
                <span>${discountPrice} USD</span>
                <span className="old-price">${price} USD</span>
                <span className="unit-sold">{unitSold} sold</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
