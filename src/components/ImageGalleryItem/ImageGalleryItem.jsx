import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ itemData, openModal }) => {
    const { webformatURL, largeImageURL, tags } = itemData;
    return (
        <li className ={css.galleryItem}>
            <img className ={css.imageGalleryItem} src={ webformatURL} alt={tags} onClick ={() => openModal(largeImageURL)} />
        </li>
    )
}
ImageGalleryItem.propTypes = {
    itemData: PropTypes.arrayOf(PropTypes.shape).isRequired,
    openModal: PropTypes.func.isRequired,
};