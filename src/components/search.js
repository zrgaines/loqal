import React from 'react';


class Search extends React.Component {

  constructor(props){
    super(props);
  }

  _handleSearch(event) {
    event.preventDefault();
    this.props.search(this.refs.loqalSearch.value);
    this.props.clear();
    this.props.setZoom(16);
  }
  render(){
    return(
      <form onSubmit={this._handleSearch.bind(this)}>
        <input type="search" ref="loqalSearch" placeholder="Search for a city"/>
        <input type="submit" value="Search"/>
      </form>
    );
  }
}


export default Search;
