import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapApp } from './MapApp';

import mapboxgl from 'mapbox-gl'; 
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuZ29yaWFueiIsImEiOiJja21rcmZzYzExM3VyMnFtdW53N3A0NHRoIn0.MoNzoMXv3foggjhEdI3OeA';

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


