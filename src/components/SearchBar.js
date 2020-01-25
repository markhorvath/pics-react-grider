import React from 'react';

class SearchBar extends React.Component {
    //e for event
    // onInputChange(e) {
    //     e.target.value;
    // }
    state = { term: '' };

    //we leave the paranthesis off because otherwise it's automatically called whenever the component is rendered
    //by leaving them off we are passing a reference to this function to the input element so that the input can call it in the future
    //onChange is a special prop name for input elements.  similar to onClick and onSubmit.
    //<input type="text" onChange={(e) => console.log(e.target.value)} /> use this format usually if it's just one line of code for the event handler
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                    <label>Image Search</label>

                    <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;