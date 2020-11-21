import React, { useState } from 'react';
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import * as data from "./StoreList.json"
import Search from './Search';


 const check = (array) => {
     if (array.delivery == false) return "Not available"
     else return "Available"
 }
export default function Map() {
    const [select,setSelect] = useState(null);
    const containerStyle = {
        width: '100%',
        height: '100vh'
      };
       
      const center = {
        lat: 65.012093,
        lng: 25.465076
      };
    return (
        <LoadScript
      googleMapsApiKey="AIzaSyDOduUSUYX6lFwhxQmx2b3yHifFBAwiHSw"
    >
      <Search/>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
          {data.StoreList.map((store) => {
              return (
                  <Marker key={store.id} 
                          position={{
                              lat: store.latitue ,
                              lng: store.longtitue}}
                          onClick={() => {
                              setSelect(store);
                          }}
                                             />
              )
          })}
          {select && (
          <InfoWindow
            onCloseClick={() => {
              setSelect(null);
            }}
            position={{
              lat: select.latitue,
              lng: select.longtitue
            }}
          >
            <div>
              <h1>{select.name}</h1>
              <p>Address: {select.address}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
    )
}
