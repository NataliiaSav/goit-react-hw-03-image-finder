import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Serchbar.module.css'

export class Searchbar extends Component {
    state = {
        serchImage: '',
    }
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.serchImage)
    }
    inputChanche = event => {
        this.setState({
            serchImage: event.currentTarget.value,
        })
    }

    render() {
  return (
          <header className={css.serchbar}>
              <form onSubmit={this.onFormSubmit} className={css.form}>
                <button type="submit" className={css.button}>
                     <span className={css.label}>Search</span>
                </button>
                  <input
                    onChange={this.inputChange}
                    className={css.input}
                    type="text"
                    autocomplete="off"
                    autofocus
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