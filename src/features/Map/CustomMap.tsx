import { Marker } from '../../types'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGltaXRyZW9ydHQiLCJhIjoiY2s2b2Jla2M1MTlyZDNtdTk0YzQyNm90aSJ9.9rd9-evI7fQ0zJAAN8JQvA'

interface InterativeMap {
  addMarker(marker: Marker): void
  addRaster(imageUrl: string): void
}

export class CustomMap implements InterativeMap {
  private mapboxMap: mapboxgl.Map

  constructor(options: mapboxgl.MapboxOptions) {
    const style = 'mapbox://styles/mapbox/satellite-v9'

    this.mapboxMap = new mapboxgl.Map({
      ...options,
      // style,
    })

    // const map = this.mapboxMap
    // map.on('load', function () {
    //   // map.resize()
    // })
  }

  addMarker(marker: Marker) {
    console.log('this is addMarker')
  }

  addRaster(imageUrl: string) {
    console.log('this is addImage')
  }
}
