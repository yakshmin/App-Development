import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class LocationMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
    };
  }

  componentDidMount() {
    // Fetch the user's current location here if needed
    // For simplicity, we'll use a static location in this example
    this.setState({ location: { lat: 37.7749, lng: -122.4194 } }); // San Francisco coordinates
  }

  onMapClick = (mapProps, map, clickEvent) => {
    // Handle map click event to set the location
    const { latLng } = clickEvent;
    const location = {
      lat: latLng.lat(),
      lng: latLng.lng(),
    };
    this.setState({ location });

    // If needed, you can also reverse geocode the coordinates to get an address
  };

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          initialCenter={{ lat: 37.7749, lng: -122.4194 }}
          center={this.state.location}
          onClick={this.onMapClick}
        >
          {this.state.location && <Marker position={this.state.location} />}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_API_KEY_HERE', // Replace with your Google Maps API key
})(LocationMap);
