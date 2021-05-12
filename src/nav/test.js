import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '600px',
  height: '400px',
  margin: '0 auto',
  marginBottom: '20px',
};

const center = {
  lat: 36.632620,
  lng: 127.460453
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCTQIlxBn5AfKGvsfJiormAE1esN3fcCkg"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
      >
       
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default MyComponent;