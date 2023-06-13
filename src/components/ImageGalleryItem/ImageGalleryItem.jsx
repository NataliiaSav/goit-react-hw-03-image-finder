import React from 'react';
import css from './ImageGalleryItem.module.css'

const ImageGaleryItem = ({ itemData, openModal }) => {
    const { webformatURL, largeImageURL, tags } = itemData;
    return (
        <li className ={css.galleryItem}>
            <img className ={css.imageGalleryItem} src={ webformatURL}alt={tags} onClick ={() => openModal(largeImageURL)} />
        </li>
    )
}