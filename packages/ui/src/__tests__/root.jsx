import React from 'react';
import renderer from 'react-test-renderer';
import Root from '../root';

it('renders correctly', () => {
  const tree = renderer.create(<Root />).toJSON();
  expect(tree).toMatchSnapshot();
});
