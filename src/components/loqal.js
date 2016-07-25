import React from 'react';
import Search from './search';
import Map from './map';
import List from './list';


class Loqal extends React.Component {
  constructor(props){
    super(props);
  }

  _fetchCity(searchTerm) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerm}&key=AIzaSyBkvToFB4jZbQ7hM9ZqJoNBb3XXKjunj74`)
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        console.log(results.results[0].geometry.location);
      })
      .catch((ex) => {
        console.log('parsing failed', ex)
      })
  }

  render(){
    return(
      <div>
        <Search search={ this._fetchCity.bind(this)}/>
        <Map />
        <List />
      </div>
    );
  }
}


export default Loqal;
