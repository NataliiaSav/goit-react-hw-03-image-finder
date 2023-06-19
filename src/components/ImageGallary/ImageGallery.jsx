import React from "react";
import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css'

export const ImageGallery = ({ images, openModal }) => {
    return (
        <ul className={css.imageGallery}>
            {images.map(image =>
                <ImageGalleryItem key={image.id} itemData={image} openModal={openModal} />
            )};
        </ul>
    )
};
ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
        }).isRequired,
    ).isRequired,
    openModal: PropTypes.func.isRequired,
};