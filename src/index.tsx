import './index.css'
import mapboxgl from 'mapbox-gl'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { DrMap } from './features/Map/DrMap'

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGltaXRyZW9ydHQiLCJhIjoiY2s2b2Jla2M1MTlyZDNtdTk0YzQyNm90aSJ9.9rd9-evI7fQ0zJAAN8JQvA'

export const App: React.FC = () => {
  return (
    <div>
      <DrMap />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
