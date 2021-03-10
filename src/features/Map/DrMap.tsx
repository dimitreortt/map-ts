import './drMap.css'
import mapboxgl, { accessToken } from 'mapbox-gl'
import React, { useEffect, useRef } from 'react'
import { CustomMap } from './CustomMap'

export const DrMap = () => {
  const mapContainer = useRef<any>()

  // useEffect(() => {
  //   // mapContainer.current = document.getElementById('drMap')
  //   const options: mapboxgl.MapboxOptions = {
  //     container: 'drMap',
  //     center: {
  //       lat: 50,
  //       lng: 0,
  //     },
  //     zoom: 1,
  //   }

  //   const map = new CustomMap(options)

  //   mapContainer.current = map
  // }, [])

  useEffect(() => {
    const options: mapboxgl.MapboxOptions = {
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    }

    mapContainer.current = new CustomMap(options)
  }, [])

  const addRaster = () => {
    alert('in add ')
  }

  /* <div id="drMap-menubar">
    <button onClick={addRaster}>Add Raster</button>
  </div> */

  return (
    <div>
      <div id="map"></div>
      <div className="map-menu">
        <button onClick={addRaster}>Add Raster</button>
      </div>
    </div>
  )
}

// const tilesetId = 'dimitreortt.ckm2et77e09ev29p9hy4zozir-0c7pw'
// const accessToken = 'pk.eyJ1IjoiZGltaXRyZW9ydHQiLCJhIjoiY2s2b2Jla2M1MTlyZDNtdTk0YzQyNm90aSJ9.9rd9-evI7fQ0zJAAN8JQvA'

// `https://api.mapbox.com/v4/${tilesetId}/{z}/{x}/{y}.png?access_token=${accessToken}`
