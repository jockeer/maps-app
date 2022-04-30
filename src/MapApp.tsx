import { MapProvider, PlacesProvider } from "./context"
import { HomeScreen } from "./screens"

import './index.css'



export const MapApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  )
}
