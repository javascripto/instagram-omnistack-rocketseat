import React, { Component } from 'react';

import api from '../services/api';

import './New.css';

export default class New extends Component {
  state = {
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: '',
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { image, ...form } = this.state;

    const data = new FormData();

    Object.entries(form)
    .forEach(([name, value]) => data.append(name, value));

    if (image) {
      data.append('image', image, image.name);
    }

    await api.post('posts', data);

    this.props.history.push('/');
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleImageChange = e => {
    this.setState({ image: e.target.files[0] });
  }

  render() {
    return (
      <form id="new-post" onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.handleImageChange} />

        <input
          type="text"
          name="author"
          placeholder="Autor do post"
          onChange={this.handleChange}
          value={this.state.author}
        />

        <input
          type="text"
          name="place"
          placeholder="Local do post"
          onChange={this.handleChange}
          value={this.state.place}
        />

        <input
          type="text"
          name="description"
          placeholder="Descrição do post"
          onChange={this.handleChange}
          value={this.state.description}
        />

        <input
          type="text"
          name="hashtags"
          placeholder="Hashtags do post"
          onChange={this.handleChange}
          value={this.state.hashtags}
        />

        <button type="submit">Enviar</button>
      </form>
    );
  }
}
