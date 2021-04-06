import { Map, GeolocateControl } from 'https://cdn.skypack.dev/maplibre-gl'

//const mapTilerKey = "olPbAXB9QkZuFSDG4x2V"
const mapTilerKey = "XFw43ruuvATFrAeR6eeg"

const backgroundMap = new Map({
  container: 'back',
  style: `https://api.maptiler.com/maps/b2709bae-492d-4fca-aac5-9bc35a3b73ed/style.json?key=${mapTilerKey}`,
  center: [0, 0],
  hash: true,
  zoom: 0
});

const beforeMap = new Map({
  container: 'before',
  style: `https://api.maptiler.com/maps/2c83d77f-6309-404c-a00b-ab6a1c47b21b/style.json?key=XFw43ruuvATFrAeR6eeg`,
  center: [0, 0],
  hash: true,
  zoom: 0
});

const afterMap = new Map({
  container: 'after',
  style: `https://api.maptiler.com/maps/48315e60-7931-47e9-8118-32f937f1823f/style.json?key=XFw43ruuvATFrAeR6eeg`,
  center: [0, 0],
  hash: true,
  zoom: 0
});

beforeMap.on('move', function() {
  backgroundMap.setZoom(beforeMap.getZoom());
  backgroundMap.setCenter(beforeMap.getCenter());
});


// A selector or reference to HTML element
var container = '#comparison-container';

var map = new window.mapboxgl.Compare(beforeMap, afterMap, container, {
// Set this to enable comparing two maps by mouse movement:
// mousemove: true
});
