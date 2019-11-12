import { ADD_TO_CART, addToCart } from './cart-actions';

describe('actions - cart - addToCart', () => {
  const mockProduct = {
    id: '0001',
    name: 'Minimal Deco Furniture',
    image: './assets/pro1.jpg',
    image2: './assets/pro2.jpg',
    category: 'furniture',
    discountPrice: 119.0,
    price: 230.0,
    unitSold: 15,
  };

  test('addToCart with product', () => {
    const action = addToCart(mockProduct);

    expect(action).toEqual({
      type: ADD_TO_CART,
      product: mockProduct,
    });
  });
});

test('fetch weather', () => {
  return fetch(
    'https://api.openweathermap.org/data/2.5/weather?appid=874c33a3a61f941493eeb28bd14211e2&units=metric&q=ho%20chi%20minh%20city'
  )
    .then((res) => res.json())
    .then((json) => {
      console.log('weather fetched', json);
      expect(json.cod).toBe(200);
    });
});
