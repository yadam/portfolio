import React from 'react';
import renderer from 'react-test-renderer';
import Item from '../component';

jest.mock('../../buttons', () => 'Buttons');
jest.mock('../../loader', () => 'Loader');

let mockProps;

describe('Item', () => {
  beforeEach(() => {
    mockProps = {
      alt: 'Test alt',
      classes: { card: 'test card className', media: 'test media className' },
      id: 123456,
      image: 'TestImageUrl',
      loading: false,
      onChange: jest.fn(),
      reaction: '',
      title: 'TestTitle',
    };
  });

  it('renders correctly when loading', () => {
    mockProps.alt = '';
    mockProps.id = 0;
    mockProps.image = '';
    mockProps.loading = true;
    mockProps.reaction = '';
    mockProps.title = '';
    const tree = renderer.create(<Item {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when finished loading', () => {
    const tree = renderer.create(<Item {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when marked funny', () => {
    mockProps.reaction = 'funny';
    const tree = renderer.create(<Item {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when marked not funny', () => {
    mockProps.reaction = 'meh';
    const tree = renderer.create(<Item {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
