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
            alt: 'Test alt',
            num: 'TestId',
            img: 'TestImageUrl',
            safe_title: 'TestTitle',
          });
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
});
