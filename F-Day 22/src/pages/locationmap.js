
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const GeolocationComponent = () => {
  const [userLocation, setUserLocation] = useState({ lat: 10.997329, lng: 76.949551 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <MapContainer center={userLocation} zoom={5} style={{ height: '20%', width: '20%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=bacb834cc85e54f2bf251d01056604d1">OpenStreetMap</a> contributors'
      />
      <Marker position={userLocation} />
    </MapContainer>
  );
};

export default GeolocationComponent;
