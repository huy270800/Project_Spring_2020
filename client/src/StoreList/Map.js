import React, { Component } from 'react'
import {
    GoogleMap,
    InfoWindow,
    LoadScript,
    Marker
  } from "@react-google-maps/api";

  const containerStyle = {
    width: "100%",
    height: "100vh"
  };
  const center = {
    lat: 65.012093,
    lng: 25.465076
  };

export default class Map extends Component {
    onMarkerClick = (location,data) => {
        data = location.id
        this.props.setSelectedLocation(location)
    }
    render() {
        return (
            <LoadScript googleMapsApiKey="AIzaSyDOduUSUYX6lFwhxQmx2b3yHifFBAwiHSw">
                <GoogleMap 
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}>

        {
          this.props.searchResults.map(location => <Marker onClick={() => this.onMarkerClick(location, this.props.CharData)} 
                                                           position={{ lat: location.latitude, lng: location.longitude }} 
                                                           key={location.id} 
                                                           title={location.name} 
                                                           {...location} />     )
        }
        </GoogleMap>
        </LoadScript>
        )
    }
}
