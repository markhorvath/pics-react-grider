import React from 'react';
import unsplash from '../API/unsplash.js';
import SearchBar from './SearchBar.js';
import ImageList from './ImageList';



class App extends React.Component {
    state = { images: [], url: '' };

    //The code block below was the old way of doing something with the API data once the GET request finished
    // .then(response => {
    //         console.log(response.data.results);
    //     })

    //async in front of the function/mehtod name then await in front of the API request (or whatever is taking time)
    //and then whatever is returned gets assigned to a variable (response)
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        });

        //we had to refactor to an arrow function because this was refering to onSubmit prop in SearchBar component
        //if this happens in the future console.log(this) and see what this is referring to.  in this case it was referring
        //to onSubmit props object that gets passed to SearchBar, which calls onFormSubmit which references this.props.onSubmit which
        //is what this.setState here below was trying to update 'images' on, thus the error
        this.setState({ images: response.data.results, url: response.data.results[0].urls.small });
        console.log(typeof this.state.images[0].urls.small);

    }



    render() {
        //the onSubmit in the SearchBar component is not the same as the event prop onSubmit in the form element
        //we're just using that name because it makes sense for what we're doing.. it could be called 'anything'
        //and it'd work assuming we refered to 'anything' in the component jsx
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
                Found: {this.state.images.length} images.

               <img src={this.state.url} />

            </div>
        )
    };
}

export default App;