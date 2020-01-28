import React from 'react';

const ImageList = props => {
    //this is the destructured version, notice how often image was used in the commented-out code below
    const images = props.images.map(({description, id, urls}) => {
        return <img alt={description} key={id} src={urls.small} />
    });

    // const images = props.images.map(image => {
    //     return <img alt={image.description} key={image.id} src={image.urls.small} />
    // });

    return <div>{images}</div>
}

export default ImageList;