// action types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const REDUCE_CART_ITEM = 'REDUCE_CART_ITEM';

// action creators
export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product,
  };
}

export function removeFromCart(product) {
  return {
    type: REMOVE_FROM_CART,
    product,
  };
}
export function reduceCartItem(product) {
  return {
    type: REDUCE_CART_ITEM,
    product,
  };
}
