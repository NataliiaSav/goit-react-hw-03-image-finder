import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from '../services/fetch'
import { ImageGallery } from './ImageGallary/ImageGallery';


export class App extends Component {
  state = {
    images: [],
    searchImage: '',
    page: 1,
    isLoading: false,
    isModal: false,

  }

  componentDidUpdate(_, prevState) {
   const { searchImage, page } = this.state;
if(page !== prevState.page || searchImage!== prevState.searchImage ){
  this.getImages(searchImage, page)
    }
  }
  getImages = (text, page) => {
    this.setState({ isLoading: true })
    fetchImages(text, page).then(({ data }) => {
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits]
      }))
    }).catch(error => {
      throw new Error(error)
    }).finally(()=> {
      this.setState ({ isLoading: false})
    })
}
  openModal = () => {
    
  }
  onSubmit = searchImage => {
    this.setState({ searchImage });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {/* <ImageGallery images={this.images} openModal = {this.openModal} /> */}
      </>
    )
  }
}



