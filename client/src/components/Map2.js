import React from 'react'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '600px',
  height: '400px',
  margin: '0 auto',
  marginBottom: '20px',
  marginTop: '20px'
};

function MyComponent() {
  const center = {
    lat: 37.4751131683872,
    lng: 126.95706702631956
  };
  
  return (
    <><br/>
   <h2 >찾아오는길</h2>
    <LoadScript
      googleMapsApiKey="AIzaSyCTQIlxBn5AfKGvsfJiormAE1esN3fcCkg"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        <Marker
        position={center}
        />
      </GoogleMap>
    </LoadScript>
    </>
  )
}

export default MyComponent;