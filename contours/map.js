import { Map, GeolocateControl } from 'https://cdn.skypack.dev/maplibre-gl'

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
  style: `https://api.maptiler.com/maps/2c83d77f-6309-404c-a00b-ab6a1c47b21b/style.json?key=${mapTilerKey}`, // PRODUCTION
  //style: `https://api.maptiler.com/maps/ch-swisstopo-lbm/style.json?key=${mapTilerKey}`, // SWISS TOPO
  center: [0, 0],
  hash: true,
  zoom: 0
});

const afterMap = new Map({
  container: 'after',
  //style: `https://api.maptiler.com/maps/48315e60-7931-47e9-8118-32f937f1823f/style.json?key=${mapTilerKey}`, // UAE-SWISS-OLMIK
  style: `https://api.maptiler.com/maps/38887e1c-b17d-4a90-975d-9c8f88c05164/style.json?key=qsYmsqFwCO0J7HPO9nOq`, // EUROPE
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
