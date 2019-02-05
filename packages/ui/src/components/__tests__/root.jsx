import React from 'react';
import renderer from 'react-test-renderer';
import Root from '../root';

jest.mock('../item', () => 'Item');

let mockProps;

describe('Root', () => {
  beforeEach(() => {
    mockProps = {};
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Root {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
