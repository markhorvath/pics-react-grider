import React from 'react';
import SearchBar from './SearchBar.js';

class App extends React.Component {
    onSearchSubmit(term) {
        console.log(term);
    }

    render() {
        //the onSubmit in the SearchBar component is not the same as the event prop onSubmit in the form..
        //we're just using that name because it makes sense for what we're doing.. it could be called 'anything'
        //and it'd work assuming we refered to 'anything' in the component jsx
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    };
}

export default App;