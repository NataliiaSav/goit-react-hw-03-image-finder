import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import {fetchImages} from '../services/fetch'


export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
  }

  componentDidUpdate(prevProps, prevState) {
   const { query, page } = this.state;

if(page !== prevState.page || query!== prevState.query ){
  fetchImages(query)
    .then(({ hits, totalHits }) => {
      const imagesArray = hits.map(hit => ({
        id: hit.id,
        smallImage: hit.webformatURL,
        largeImage: hit.largeImageURL,
      }));
      return this.setState({
        page: 1,
        images: imagesArray,
        imagesOnPage: imagesArray.length,
        totalImages: totalHits,
      });
    })
        .catch(error => this.setState({ error }))
        .finally(() =>
          this.setState(({ isLoading }) => ({ isLoading: !isLoading }))
        );
    }
  }
  openModal = () => {
    
  }
  onSubmit = query => {
    this.setState({ query });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.images} openModal = {this.openModal} />
      </>
    )
  }
}



