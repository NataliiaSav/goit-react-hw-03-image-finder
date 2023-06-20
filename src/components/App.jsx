import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from '../services/fetch'
import { ImageGallery } from './ImageGallary/ImageGallery';
import Modal from './Modal/Modal';
import  { Loader }  from './Loader/Loader';
import { Button } from './Button/Button';


export class App extends Component {
  state = {
    images: [],
    searchImage: '',
    page: 1,
    isLoading: false,
    isModal: false,
    currentLargeImg: null,
    allImages: null,
  }

  componentDidUpdate(_, prevState) {
   const { searchImage, page } = this.state;
if(page !== prevState.page || searchImage!== prevState.searchImage ){
  this.getImages(searchImage, page)
    }
  };
  
  getImages = (text, page) => {
    this.setState({ isLoading: true })

    fetchImages(text, page).then(({ data }) => {
      const allImages = data.totalHits
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits]
      }));
      if (allImages !== this.state.allImages) {
        this.setState({allImages})
      }
    }).catch(error => {
      throw new Error(error)
    }).finally(() => {
      this.setState({ isLoading: false })
    })
  };
  openModal = (src, alt) => {
    this.setState(state => ({
      ...state, currentLargeImg: { src, alt }
    }))
  };
  closeModal = (e) => {
    this.setState({currentLargeImg: null})
  }
  onSubmit = (searchImage) => {
    if (searchImage === '') {
      return alert ('Enter the search value')
    }
    if (searchImage === this.state.searchImage) {
      return;
    }
    this.setState({
      images: [],
      searchImage,
      page: 1,
    });
  };
  loadMore = () => {
    const { page } = this.state
    this.setState({ page: page + 1 })
  };
  render() {
    const {images, currentLargeImg, isLoading, allImages} = this.state
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        
        {images.length > 0 &&
          
          <ImageGallery images={images} openModal={this.openModal} />
        }
          {images.length < allImages &&
          <Button loadMore={this.loadMore} />
          } 
        {isLoading && <Loader />}
        
        {currentLargeImg && <Modal imgLarge={currentLargeImg} closeModal={this.closeModal} />}
        
      </>
    )
  }
}



