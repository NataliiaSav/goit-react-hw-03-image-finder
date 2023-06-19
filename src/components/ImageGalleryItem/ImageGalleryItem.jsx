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
    itemData: PropTypes.exact({
        webformatURL: PropTypes.string,
        tags: PropTypes.string,
        largeImageURL: PropTypes.string,
    }),
    onClick: PropTypes.func.isRequired,
};