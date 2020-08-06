import React from 'react';
class Search extends React.Component {
    search=()=>{
        
    }
    render() {
        return (
            <div>
                <input className='searchbar' type="text" name='productname' placeholder="Product Name..."></input>
                <button onClick={this.search} className="searchbutton"><b>Search</b></button>
            </div>
            );
    }
}

export default Search;