import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export default class Modal extends Component {
    handleOverlayClick = (event) => {
        if (event.current.target === event.target) {
            this.props.closeModal();
        }
    }
    handleEscKey = (event) => {
        if (event.key === 'Escape') {
            this.props.closeModal();
        }
    }
    componentDidMount() { 
        document.addEventListener('keydown', this.handleEscKey);
 }
    componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscKey)
 }
    render() {
        const { imgLarge } = this.props;
        const { src, alt } = imgLarge;
        return (
            <div className={css.overlay} onClick={this.handleOverlayClick}>
                <div className={css.modal}>
                    <img src={src} alt={alt} />
                </div>
            </div>
        
    )
  }
}
Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    imgLarge: PropTypes.objectOf(PropTypes.string),
}
