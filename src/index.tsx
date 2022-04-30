import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapApp } from './MapApp';

if (!navigator.geolocation) {
  alert('Tu navegador o tiene opcion  de Geolocalizacion')
  throw new Error("Tu navegador o tiene opcion  de Geolocalizacion");
  
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapApp />
  </React.StrictMode>
);


