/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Jayvee Milana

Map Box Assignment

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

'use strict';

mapboxgl.accessToken = 'pk.eyJ1IjoiamhheW1pbGFuYSIsImEiOiJjbGcxMzd1NnkxNWI5M2psYWt3ZThiN2QyIn0.GxZbzi-N1fh2M1CQq9Q8kg';

navigator.geolocation.watchPosition(successLocation, errorLocation,
  { enableHighAccuracy:true }
)

function successLocation(position) {
  setMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setMap([-2.24, 53.48])
}

function setMap(center) {
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15
  });

  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: center
        },
        properties: {
          title: 'Mapbox',
          description: 'Your Location'
        }
      }
    ]
  };

  // Map Controls
  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  // Marker / Pin
  for (const feature of geojson.features) {
    const el = document.createElement('div');
    el.className = 'marker';
  
    new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
  }
}