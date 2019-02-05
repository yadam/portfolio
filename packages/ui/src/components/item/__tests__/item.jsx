import axios from 'axios';
import React from 'react';
import renderer from 'react-test-renderer';
import ItemContainer from '..';

jest.mock('axios');
jest.mock('../component', () => 'Item');

let mockProps;

describe('Item Container', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    mockProps = {};
    axios.get = jest.fn(
      () =>
        new Promise(resolve => {
          resolve({
            data: {
              alt: 'Test alt',
              id: 123456,
              image: 'TestImageUrl',
              title: 'TestTitle',
            },
          });
        }),
    );
    axios.post = jest.fn(
      () =>
        new Promise(resolve => {
          resolve({ data: { result: 'ok' } });
        }),
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(<ItemContainer {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('gets a comic', async () => {
    const tree = renderer.create(<ItemContainer {...mockProps} />);
    await tree.root.instance.componentDidMount();
    expect(tree).toMatchSnapshot();
  });

  it('sends a reaction', async () => {
    const tree = renderer.create(<ItemContainer {...mockProps} />);
    await tree.root.instance.sendReaction(undefined, 'funny');
    expect(tree).toMatchSnapshot();
  });
});
