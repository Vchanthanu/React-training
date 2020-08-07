import React from 'react';
class Search extends React.Component {
    search=(event)=>{
        this.props.search(event.target.value)
    }
    render() {
        return (
            <div>
                <input className='searchbar' type="text" name='productname' onChange={this.search} placeholder="Product Name..."></input>
                <button onClick={this.search} className="searchbutton"><b>Search</b></button>
            </div>
            );
    }
}

export default Search;