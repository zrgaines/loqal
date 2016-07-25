import React from 'react';
import Search from './search';
import Map from './map';
import List from './list';
import fetchJsonp from 'fetch-jsonp';

class Loqal extends React.Component {
  constructor(props){
    super(props);
  }

  _handleClick() {
    fetchJsonp('https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=10000&gscoord=30.267153|-97.7430608&format=json')
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log('parsed json', json)
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }

  _fetchCity(searchTerm) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerm}&key=AIzaSyDs1TKDTMlNGnH_8VaZSCW0cy_8pmLfhIE`)
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        console.log(results.results[0].geometry.location);
        let lat = results.results[0].geometry.location.lat;
        console.log(lat);
        let lng = results.results[0].geometry.location.lng;
        console.log(lng);
      })
      .catch((ex) => {
        console.log('parsing failed', ex)
      })
  }

  render(){
    return(
      <div>
        <Search search={ this._fetchCity.bind(this) }/>
        <Map />
        <List />
        <button onClick={this._handleClick.bind(this)}>button </button>
      </div>
    );
  }
}

export default Loqal;
