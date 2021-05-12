import React, {useState, useCallback} from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '600px',
  height: '400px',
  margin: '0 auto',
};

const center = {
  lat: 36.632620,
  lng: 127.460453
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCTQIlxBn5AfKGvsfJiormAE1esN3fcCkg"
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        onLoad={onLoad}
        onUnmount={onUnmount}
      />
        
      
  ) : <></>
}

export default MyComponent;
       // AIzaSyCTQIlxBn5AfKGvsfJiormAE1esN3fcCkg
          
