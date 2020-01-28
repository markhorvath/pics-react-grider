import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 };
        this.imageRef = React.createRef();

    }

    componentDidMount() {
        // try console.logging the below.. clientHeigh is zero because it runs before the image object loads
        // console.log(this.imageRef);
        // console.log(this.imageRef.current.clientHeight);

        //we're adding an event listener for when the image finishes loading and a callback to setSpans()
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    //setSpans is an arrow function since we're using it in the callback and we need to properly bind 'this'
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        //We're using the ES6 descructured version, but it's equivalent the line below (references spans const above)
        // this.setState({ spans: spans });
        this.setState({ spans });
    }

    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;