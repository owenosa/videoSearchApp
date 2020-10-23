import React from 'react';

class SearchBar extends React.Component {

    
    // assigning our input value to the state. controlled input vs uncontrolled input
    state = { term: '' }

    // allowing for the input value to change while the user type in the box
    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };

    // when user submits in search box 
    onFormSubmit = (event) => {
        // prevent page from refreshing on submit
        event.preventDefault();

        // Parent Component is told what the term is. Passing State up through Props
        this.props.onFormSubmit(this.state.term);
        
        // restart value back to empty 
        this.setState ({ term: '' })
    };

    render() {
        return (
            <div className = "search-bar ui segment" >
                <form onSubmit = {this.onFormSubmit} className = "ui form">
                    <div className="field">
                        <label>Youtube API Video Search APP</label>
                        <input 
                        type="text" 
                        value={this.state.term}
                        onChange={this.onInputChange} 
                        placeholder = "Search for Videos"
                        />
                    </div>
                </form>
            </div>   
        ); 
    }
}

export default SearchBar