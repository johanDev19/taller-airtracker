import React, {Component} from 'react';
import { withGoogleMap, GoogleMap, withScriptjs} from 'react-google-maps';

const MyMapComponent = withScriptjs(
  withGoogleMap(({ children }) => (
    <GoogleMap defaultZoom={4} defaultCenter={{ lat: 45.8033295, lng: -78.8958277 }}>
      {children}
    </GoogleMap>
  ))
);

class Map extends Component {
  render() {
    return (<div>
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>)
  }
}

export default Map;