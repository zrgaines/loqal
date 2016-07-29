import React from 'react';
import Search from './search';
import DestinationMap from './destination-map';
import List from './list';
import ListItem from './list-item';
import fetchJsonp from 'fetch-jsonp';

class Loqal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lat: [],
      lng: [],
      title: [],
      img: [],
      displayListItems: [],
      searchLat: 36.964,
      searchLng: -95.015,
      zoom: 2
    }
  }
  _addIndexToDisplayListItems(index){
    var displayArray = this.state.displayListItems;
    displayArray.push(index)
    this.setState({displayListItems: displayArray});
  }
  _setZoom(zoom){
    this.setState({zoom: zoom});
  }
  _fetchCity(searchTerm) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?type=landmark&address=${searchTerm}&key=AIzaSyDs1TKDTMlNGnH_8VaZSCW0cy_8pmLfhIE`)
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        let lat = results.results[0].geometry.location.lat;
        let lng = results.results[0].geometry.location.lng;

        this.setState({
          searchLat: lat,
          searchLng: lng
        })
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
          var arrayLat = [];
          var arrayLng = [];
          var arrayTitle = [];
        locationArray.forEach(function(location) {



          arrayLat.push(location.lat)
          arrayLng.push(location.lon)
          arrayTitle.push(location.title)

          this.setState({
          lat: arrayLat,
          lng: arrayLng,
          title: arrayTitle
          })

          this.wikiPage(location.pageid);
        }.bind(this))
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
}

_clearDisplays(){
  this.setState({displayListItems: []});
}

wikiPage(pageID) {
    fetchJsonp(`https://en.wikipedia.org/w/api.php?action=query&prop=images&pageids=${pageID}&format=json`)
      .then((response) => {
        return response.json();
      }).then((json) => {
        this.wikiSummary(json.query.pages[pageID])
        this.wikiImage(json.query.pages[pageID].images[0].title);

      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
}

wikiImage(imageTitle) {
    fetchJsonp(`https://en.wikipedia.org/w/api.php?action=query&titles=${imageTitle}&prop=imageinfo&iiprop=url&format=json`)
      .then((response) => {
        return response.json();
      }).then((json) => {

        var arrayImg= [];
        arrayImg.push(json.query.pages[-1].imageinfo[0].url)
        this.setState({img: arrayImg})
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
}

  render(){
    return(
      <div className="mapContainer">
        <Search setZoom={this._setZoom.bind(this)} clear={this._clearDisplays.bind(this)} search={ this._fetchCity.bind(this) }/>
        <DestinationMap zoom={this.state.zoom} title={this.state.title} addindex={this._addIndexToDisplayListItems.bind(this)} searchLat={this.state.searchLat} searchLng={this.state.searchLng} landmarks={this.state} />
        <List />
        <ListItem display={this.state.displayListItems} landmark={ this.state.title }/>
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

export default Loqal;
