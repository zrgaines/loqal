import React from 'react';
import GoogleMap from 'google-map-react';
import Marker from './marker';


class DestinationMap extends React.Component {

  render(){
    return(
      <div id="map">
        <GoogleMap
          defaultCenter={{lat: 36.964, lng: -122.015}}
          defaultZoom={8}>
          <Marker className="marker" lat={36.964} lng={-122.015} text={'A'}>
          </Marker>
        </GoogleMap>
      </div>
    );
  }
}


export default DestinationMap;
