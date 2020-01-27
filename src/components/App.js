import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.js';



class App extends React.Component {
    state = { images: [] };

    //The code block below was the old way of doing something with the API data once the GET request finished
    // .then(response => {
    //         console.log(response.data.results);
    //     })

    //async in front of the function/mehtod name then await in front of the API request (or whatever is taking time)
    //and then whatever is returned gets assigned to a variable (response)
    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID a383037090ced1d59dcaa4675e25be88eed855ab60c8b13876bba3ae434d92be'
            }
        });

        //we had to refactor to an arrow function because this was refering to onSubmit prop in SearchBar component
        //if this happens in the future console.log(this) and see what this is referring to.  in this case it was referring
        //to onSubmit props object that gets passed to SearchBar, which calls onFormSubmit which references this.props.onSubmit which
        //is what this.setState here below was trying to update 'images' on, thus the error
        this.setState({ images: response.data.results });


    }



    render() {
        //the onSubmit in the SearchBar component is not the same as the event prop onSubmit in the form element
        //we're just using that name because it makes sense for what we're doing.. it could be called 'anything'
        //and it'd work assuming we refered to 'anything' in the component jsx
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images.
            </div>
        )
    };
}

export default App;