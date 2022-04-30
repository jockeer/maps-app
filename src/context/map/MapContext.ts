import { Map } from 'mapbox-gl';
import { createContext } from 'react';

interface MapContextProps {
    isMapReady:boolean
    map?: Map,

    setMap:(map: Map) => void
}

export const MapContext = createContext({} as MapContextProps)