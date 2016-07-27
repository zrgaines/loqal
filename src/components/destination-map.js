import React from 'react';
import GoogleMap from 'google-map-react';
import Marker from './marker';


class DestinationMap extends React.Component {
  render(){
    console.log(this.props.landmarks)
    return(
      
      <div id="map">
            <GoogleMap
              defaultCenter={{lat: 36.964, lng: -95.015}}
              defaultZoom={4}
              center={{lat: this.props.searchLat, lng: this.props.searchLng}} zoom={16}>
              <Marker className="marker" lat={this.props.landmarks.lat[0]} lng={this.props.landmarks.lng[0]} text={'A'}>
              </Marker>
              <Marker className="marker" lat={this.props.landmarks.lat[1]} lng={this.props.landmarks.lng[1]} text={'B'}>
              </Marker>
              <Marker className="marker" lat={this.props.landmarks.lat[2]} lng={this.props.landmarks.lng[2]} text={'C'}>
              </Marker>
              <Marker className="marker" lat={this.props.landmarks.lat[3]} lng={this.props.landmarks.lng[3]} text={'D'}>
              </Marker>
              <Marker className="marker" lat={this.props.landmarks.lat[4]} lng={this.props.landmarks.lng[4]} text={'E'}>
              </Marker>
              <Marker className="marker" lat={this.props.landmarks.lat[5]} lng={this.props.landmarks.lng[5]} text={'F'}>
              </Marker>
              <Marker className="marker" lat={this.props.landmarks.lat[6]} lng={this.props.landmarks.lng[6]} text={'G'}>
              </Marker>
              <Marker className="marker" lat={this.props.landmarks.lat[7]} lng={this.props.landmarks.lng[7]} text={'H'}>
              </Marker>
              <Marker className="marker" lat={this.props.landmarks.lat[8]} lng={this.props.landmarks.lng[8]} text={'I'}>
              </Marker>
              <Marker className="marker" lat={this.props.landmarks.lat[9]} lng={this.props.landmarks.lng[9]} text={'J'}>
              </Marker>
              
            </GoogleMap>
      </div>
    );
  }
}


export default DestinationMap;
