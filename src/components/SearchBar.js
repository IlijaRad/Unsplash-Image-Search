import React from 'react';

class SearchBar extends React.Component{
    state = {term: ''};
    onFormSubmit(e){ 
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }


    render() {
        return (
            <div className="ui segment">
                <form onSubmit={(e) => this.onFormSubmit(e)} className = "ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={(e) => this.setState({term: e.target.value} )} value={this.state.term}></input>
                    </div>
                    
                </form>
            </div>
        )
    }

}

export default SearchBar;