import React, { Component } from 'react';
import api from '../../services/api';
import { FaSpinner } from 'react-icons/fa';

import { Container, SubmitButton } from './styles';

export default class New extends Component {
  state = {
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: '',
    loading: true,
  }
  componentDidMount() {
    this.setState({
      loading: false,
    })
  }

  handleSubmit = async e => {
    e.preventDefault();
    
    this.setState({ loading: true });
    try {
      const data = new FormData();
  
      data.append('image', this.state.image);
      data.append('author', this.state.author);
      data.append('place', this.state.place);
      data.append('description', this.state.description);
      data.append('hashtags', this.state.hashtags);
  
      await api.post('posts', data);
  
      this.props.history.push('/');
    } catch(err) {

    } finally {
      this.setState({ loading: false });
    }
  }

  handleImageChange = e => {
    this.setState({ image: e.target.files[0] })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { loading } = this.state;

    return (
      <Container  onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.handleImageChange}/>
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

        <SubmitButton type="submit" loading={Number(loading)}>
          {loading ? (
            <FaSpinner color="#FFF" size={17} />
          ) : (
            <p>Enviar</p>
          )} 
        </SubmitButton>
      </Container>
    );
  }
}
