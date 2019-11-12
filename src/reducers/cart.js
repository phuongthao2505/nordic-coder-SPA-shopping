import { ADD_TO_CART, REMOVE_FROM_CART, REDUCE_CART_ITEM } from '../actions/cart-actions';

const initialState = {
  total: 0,
  items: [
    // {
    //   id: '0001',
    //   name: 'Minimal Deco Furniture',
    //   image: './assets/pro1.jpg',
    //   image2: './assets/pro2.jpg',
    //   category: 'furniture',
    //   discountPrice: 119.0,
    //   price: 230.0,
    //   quantity: 1,
    // },
  ],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product } = action;
      const { items } = state;
      let updatedCart;
      const cartProduct = items.find((item) => item.id === product.id);
      if (cartProduct) {
        // item has been added before
        updatedCart = items.map((item) => {
          if (item.id === cartProduct.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }

          return item;
        });
      } else {
        // add new item
        updatedCart = [
          ...items,
          {
            ...product,
            quantity: 1,
          },
        ];
      }

      const total = calculateTotal(updatedCart);

      return { items: updatedCart, total };
    }

    case REDUCE_CART_ITEM: {
      const { product } = action;
      const { items } = state;
      let updatedCart;
      const cartProduct = items.find((item) => item.id === product.id);
      if (cartProduct) {
        // item has been added before
        updatedCart = items.map((item) => {
          if (item.id === cartProduct.id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }

          return item;
        });
      }
      const total = calculateTotal(updatedCart);

      return { items: updatedCart, total };
    }

    case REMOVE_FROM_CART: {
      const { product } = action;
      const { items } = state;
      const updatedCart = items.filter((item) => item.id !== product.id);

      const total = calculateTotal(updatedCart);

      return { items: updatedCart, total };
    }
    default:
      return state;
  }
}

function calculateTotal(items) {
  return items.reduce((sum, item) => {
    return sum + (item.discountPrice || item.price) * item.quantity;
  }, 0);
}
