import React from 'react';
import renderer from 'react-test-renderer';
import Item from '../component';

jest.mock('../../loader', () => 'Loader');

let mockProps;

describe('Item', () => {
  beforeEach(() => {
    mockProps = {
      alt: 'Test alt',
      classes: { card: 'test card className', media: 'test media className' },
      id: 'TestId',
      image: 'TestImageUrl',
      isFunny: undefined,
      loading: false,
      title: 'TestTitle',
    };
  });

  it('renders correctly when loading', () => {
    mockProps.loading = true;
    const tree = renderer.create(<Item {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when finished loading', () => {
    const tree = renderer.create(<Item {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when marked funny', () => {
    mockProps.isFunny = true;
    const tree = renderer.create(<Item {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when marked not funny', () => {
    mockProps.isFunny = false;
    const tree = renderer.create(<Item {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
