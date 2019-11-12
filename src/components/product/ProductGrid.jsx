import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cart-actions';
import { fetchProducts } from '../../actions/products-actions';
import Product from './Product';

class ProductGrid extends Component {
  static propTypes = {
    addToCart: PropTypes.func.isRequired,
  };

  handleAddToCart = (id) => {
    const product = this.props.products.find((product) => id === product.id);
    if (product) {
      this.props.addToCart(product);
    }
  };

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products, total, resultFrom, resultTo , sortOrder, filter} = this.props;
    let products_list = [];
    if (filter) {
      products_list = products.filter(product => product.name.toLowerCase().includes(filter.toLowerCase()) || product.category.toLowerCase().includes(filter.toLowerCase()));
    } else {
      products_list = products;
    }
    switch (sortOrder) {
      case 1:
        products_list.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
        return 0;
        });
        break;
      case 2:
        products_list.sort((a, b) => {
          if (a.name > b.name) return -1;
          if (a.name < b.name) return 1;
          return 0;
        });
        break;
      case 3:
        products_list.sort((a, b) => {
          if (a.discountPrice > b.discountPrice) return -1;
          if (a.discountPrice < b.discountPrice) return 1;
          return 0;
        });
        break;
      case 4:
        products_list.sort((a, b) => {
          if (a.discountPrice > b.discountPrice) return 1;
          if (a.discountPrice < b.discountPrice) return -1;
          return 0;
        });
        break;
      case 5:
        products_list.sort((a, b) => {
          if (a.unitSold > b.unitSold) return -1;
          if (a.unitSold < b.unitSold) return 1;
          return 0;
        });
    }
    return (
      <div className="col-xl-9 col-lg-8">
        <div className="row mb-10">
          <div className="col-xl-5 col-lg-6 col-md-6">
            <div className="product-showing mb-40">
              <p>
                Showing {resultFrom}–{resultTo} of {total} results
              </p>
            </div>
          </div>
        </div>
        {/* tab content */}
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="row">
              {products_list.map((product) => (
                <Product key={product.id} {...product} onAddToCart={this.handleAddToCart} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ products }) {
  return {
    total: products.total,
    resultFrom: products.page,
    resultTo: products.pageSize,
    products: products.items,
    sortOrder: products.sortOrder,
    filter: products.filter,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductGrid);
