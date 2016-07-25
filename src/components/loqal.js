import React from 'react';
import Search from './search';
import Map from './map';
import List from './list';


class Loqal extends React.Component {
  constructor(props){
    super(props);
  }
  _fetchCity(searchTerm) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerm}&key=AIzaSyDs1TKDTMlNGnH_8VaZSCW0cy_8pmLfhIE`)
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        let lat = results.results[0].geometry.location.lat;
        console.log(lat);
        let lng = results.results[0].geometry.location.lng;
        console.log(lng);
      })
      .catch((ex) => {
        console.log('parsing failed', ex)
      })
  }
  // _cityInfo(lat, lng) {
  //   fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=500&key=AIzaSyDs1TKDTMlNGnH_8VaZSCW0cy_8pmLfhIE`)
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((results) => {
  //       console.log(results);
  //     })
  //     .catch((ex) => {
  //       console.log('parsing failed', ex)
  //     })
  // }
  render(){
    return(
      <div>
        <Search search={ this._fetchCity.bind(this) }/>
        <Map />
        <List />
      </div>
    );
  }
}


export default Loqal;
