import axios from 'axios';
import React, { PureComponent } from 'react';
import Item from './component';

export default class ItemContainer extends PureComponent {
  constructor() {
    super();
    this.state = {
      alt: undefined,
      id: undefined,
      image: undefined,
      isFunny: undefined,
      loading: true,
      title: undefined,
    };
  }

  componentDidMount() {
    axios.get('https://xkcd.com/info.0.json').then(response => {
      const { alt, img: image, num: id, safe_title: title } = response;
      this.setState({ alt, id, image, loading: false, title });
    });
  }

  render() {
    return <Item {...this.state} />;
  }
}
