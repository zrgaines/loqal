import React from 'react';
import Search from './search';
import DestinationMap from './destination-map';
import List from './list';
import fetchJsonp from 'fetch-jsonp';

class Loqal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lat: [],
      lng: [],
      title: []
    }
  }
  _fetchCity(searchTerm) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?type=landmark&address=${searchTerm}&key=AIzaSyDs1TKDTMlNGnH_8VaZSCW0cy_8pmLfhIE`)
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        let lat = results.results[0].geometry.location.lat;
        let lng = results.results[0].geometry.location.lng;
        this.wikiJson(lat, lng);
      })
      .catch((ex) => {
        console.log('parsing failed', ex)
      })
  }
  wikiJson(lat, long) {
  fetchJsonp(`https://en.wikipedia.org/w/api.php?action=query&list=geosearch&type=river&gsradius=10000&gscoord=${lat}|${long}&format=json`)
      .then((response) => {
        return response.json();
      }).then((json) => {
        var locationArray = json.query.geosearch;
        locationArray.forEach(function(location) {

          var arrayLat = this.state.lat;
          var arrayLng = this.state.lng;
          var arrayTitle = this.state.title;

          var lat = location.lat;
          var lon = location.lon;
          var title = location.title;

          arrayLat.push(lat)
          arrayLng.push(lon)
          arrayTitle.push(title)
          
          this.setState({
          lat: arrayLat,
          lng: arrayLng,
          title: arrayTitle
          })
          this.wikiPage(location.pageid);
        }.bind(this))
        console.log(this.state);
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
}

wikiPage(pageID) {
    fetchJsonp(`https://en.wikipedia.org/w/api.php?action=query&prop=images&pageids=${pageID}&format=json`)
      .then((response) => {
        return response.json();
      }).then((json) => {
          if(json.query.pages[pageID].images) { this.wikiImage(json.query.pages[pageID].images[0].title); }
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
}

wikiImage(imageTitle) {
    fetchJsonp(`https://en.wikipedia.org/w/api.php?action=query&titles=${imageTitle}&prop=imageinfo&iiprop=url&format=json`)
      .then((response) => {
        return response.json();
      }).then((json) => {
        console.log(json.query.pages[-1].imageinfo[0].url)
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
}

  render(){
    return(
      <div>
        <Search search={ this._fetchCity.bind(this) }/>
        <List />
        <DestinationMap />
      </div>
    );
  }
}

var fetchCity = function(searchTerm) {
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?type=landmark&address=${searchTerm}&key=AIzaSyDs1TKDTMlNGnH_8VaZSCW0cy_8pmLfhIE`)
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        let lat = results.results[0].geometry.location.lat;
        let lng = results.results[0].geometry.location.lng;
        wikiJson(lat, lng);
      })
      .catch((ex) => {
        console.log('parsing failed', ex)
      })
}

// var wikiJson = function(lat, long) {
//   fetchJsonp(`https://en.wikipedia.org/w/api.php?action=query&list=geosearch&type=river&gsradius=10000&gscoord=${lat}|${long}&format=json`)
//       .then(function(response) {
//         return response.json();
//       }).then(function(json) {
//         var locationArray = json.query.geosearch;
//         locationArray.forEach(function(location) {
         	
//           this.state.lat.push(location.lat);
//           console.log(this.state.lat)
//           wikiPage(location.pageid);
//         })
//       }).catch(function(ex) {
//         console.log('parsing failed', ex)
//       })
// }

// var wikiPage = function(pageID) {
//     fetchJsonp(`https://en.wikipedia.org/w/api.php?action=query&prop=images&pageids=${pageID}&format=json`)
//       .then(function(response) {
//         return response.json();
//       }).then(function(json) {
//           if(json.query.pages[pageID].images) { wikiImage(json.query.pages[pageID].images[0].title); }
//       }).catch(function(ex) {
//         console.log('parsing failed', ex)
//       })
// }

// var wikiImage = function(imageTitle) {
//     fetchJsonp(`https://en.wikipedia.org/w/api.php?action=query&titles=${imageTitle}&prop=imageinfo&iiprop=url&format=json`)
//       .then(function(response) {
//         return response.json();
//       }).then(function(json) {
//         console.log(json.query.pages[-1].imageinfo[0].url)
//       }).catch(function(ex) {
//         console.log('parsing failed', ex)
//       })
// }

export default Loqal;
