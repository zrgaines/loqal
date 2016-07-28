import React from 'react';
import GoogleMap from 'google-map-react';
import Marker from './marker';


class DestinationMap extends React.Component {
  render(){
    if(this.props.landmarks.lat.length > 0) {
      return(
        <div id="map">
            <GoogleMap
              zoom={16}
              defaultZoom={4}
              center={{lat: this.props.searchLat, lng: this.props.searchLng}}>
              <Marker className="marker" addindex={this.props.addindex.bind(this)} title={this.props.title[0]} id={0} lat={this.props.landmarks.lat[0]} lng={this.props.landmarks.lng[0]} >
              </Marker>
              <Marker className="marker" addindex={this.props.addindex.bind(this)} title={this.props.title[1]} id={1} lat={this.props.landmarks.lat[1]} lng={this.props.landmarks.lng[1]} >
              </Marker>
              <Marker className="marker" addindex={this.props.addindex.bind(this)} title={this.props.title[2]} id={2} lat={this.props.landmarks.lat[2]} lng={this.props.landmarks.lng[2]} >
              </Marker>
              <Marker className="marker" addindex={this.props.addindex.bind(this)} title={this.props.title[3]} id={3} lat={this.props.landmarks.lat[3]} lng={this.props.landmarks.lng[3]} >
              </Marker>
              <Marker className="marker" addindex={this.props.addindex.bind(this)} title={this.props.title[4]} id={4} lat={this.props.landmarks.lat[4]} lng={this.props.landmarks.lng[4]} >
              </Marker>
              <Marker className="marker" addindex={this.props.addindex.bind(this)} title={this.props.title[5]} id={5} lat={this.props.landmarks.lat[5]} lng={this.props.landmarks.lng[5]} >
              </Marker>
              <Marker className="marker" addindex={this.props.addindex.bind(this)} title={this.props.title[6]} id={6} lat={this.props.landmarks.lat[6]} lng={this.props.landmarks.lng[6]} >
              </Marker>
              <Marker className="marker" addindex={this.props.addindex.bind(this)} title={this.props.title[7]} id={7} lat={this.props.landmarks.lat[7]} lng={this.props.landmarks.lng[7]} >
              </Marker>
              <Marker className="marker" addindex={this.props.addindex.bind(this)} title={this.props.title[8]} id={8} lat={this.props.landmarks.lat[8]} lng={this.props.landmarks.lng[8]} >
              </Marker>
              <Marker className="marker" addindex={this.props.addindex.bind(this)} title={this.props.title[9]} id={9} lat={this.props.landmarks.lat[9]} lng={this.props.landmarks.lng[9]} >
              </Marker>
            </GoogleMap>
        </div>
      );
    }
    else{
      return(
        <div id="map">
            <GoogleMap
              zoom={16}
              defaultZoom={4}
              center={{lat: this.props.searchLat, lng: this.props.searchLng}}>
            </GoogleMap>
          </div>
      )
    }

  }
}


export default DestinationMap;
