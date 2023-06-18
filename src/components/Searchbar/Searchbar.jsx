import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css'

export class Searchbar extends Component {
    state = {
        searchImage: '',
  }
  inputChange = event => {
        this.setState({
            searchImage: event.currentTarget.value.toLowerCase(),
        })
    }
    onFormSubmit = event => {
      event.preventDefault();
      if (this.state.searchImage === '') {
        return alert('Enter a search value')
      }
      this.props.onSubmit(this.state.searchImage)
      this.setState({searchImage: ''})
    }
    

  render() {
    const { searchImage } = this.state
  return (
          <header className={css.searchbar}>
              <form onSubmit={this.onFormSubmit} className={css.form}>
                <button type="submit" className={css.button}>
                     <span className={css.label}>Search</span>
                </button>
                  <input
                    onChange={this.inputChange}
                    className={css.input}
                    value = {searchImage}
                    type="text"
                    placeholder="Search images and photos"
                />
            </form>
          </header>

  )
}
}

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func,
}