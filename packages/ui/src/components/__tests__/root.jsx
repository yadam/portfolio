import React from 'react';
import renderer from 'react-test-renderer';
import Root from '../root';

jest.mock('../item', () => 'Item');

it('renders correctly', () => {
  const tree = renderer.create(<Root />).toJSON();
  expect(tree).toMatchSnapshot();
});
