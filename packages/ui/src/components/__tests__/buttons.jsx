import React from 'react';
import renderer from 'react-test-renderer';
import Buttons from '../buttons';

let mockProps;

describe('Buttons', () => {
  beforeEach(() => {
    mockProps = {
      onChange: jest.fn(),
      reaction: undefined,
    };
  });

  it('renders correctly when no reaction has been recorded', () => {
    const tree = renderer.create(<Buttons {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when a funny reaction has been recorded', () => {
    mockProps.reaction = 'funny';
    const tree = renderer.create(<Buttons {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when a meh reaction has been recorded', () => {
    mockProps.reaction = 'meh';
    const tree = renderer.create(<Buttons {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
