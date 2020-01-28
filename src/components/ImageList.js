import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = props => {

    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });

    // const images = props.images.map(image => {
    //     return <img alt={image.description} key={image.id} src={image.urls.small} />
    // });

    return <div className="image-list">{images}</div>
}

export default ImageList;