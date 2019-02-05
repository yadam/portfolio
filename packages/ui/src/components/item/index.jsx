import axios from 'axios';
import React, { Component } from 'react';
import Item from './component';

export default class ItemContainer extends Component {
  constructor() {
    super();
    this.state = {
      alt: undefined,
      id: undefined,
      image: undefined,
      reaction: undefined,
      loading: true,
      title: undefined,
    };

    this.sendReaction = this.sendReaction.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/comics').then(response => {
      const { alt, id, image, title } = response.data;
      this.setState({ alt, id, image, loading: false, title });
    });
  }

  sendReaction(event, reaction) {
    const { id } = this.state;
    axios.post(`http://localhost:3000/comics/${id}`, { reaction }).then(() => {
      this.setState({ reaction });
    });
  }

  render() {
    return <Item {...this.state} onChange={this.sendReaction} />;
  }
}
