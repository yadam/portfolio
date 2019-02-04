import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '..';

jest.mock('../ripple.svg', () => 'ripple.svg');

it('renders correctly', () => {
  const tree = renderer.create(<Loader />).toJSON();
  expect(tree).toMatchSnapshot();
});
