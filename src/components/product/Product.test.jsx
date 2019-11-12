import React from 'react';
import renderer from 'react-test-renderer';

import Product from './Product';

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

test('Product renderer', () => {
  const component = renderer.create(<Product {...mockProduct} />);

  // expect(component.props).toBe()
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
