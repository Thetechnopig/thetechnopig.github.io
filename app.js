// Sample data for different game objects
const gameObjects = {
  scouts: [
    { name: 'Enemy1', lat: 10, lon: 10 },
    { name: 'Enemy2', lat: 1000, lon: 1000 },
    // Add more enemies as needed
  ],
  ruins: [
    { name: 'Beast', lat: 10, lon: 10 },
    { name: 'Outcast', lat: 1000, lon: 1000 },
    { name: 'Enemy1', lat: 10, lon: 10 },
    { name: 'Enemy2', lat: 1000, lon: 1000 },
    { name: 'Enemy1', lat: 10, lon: 10 },
    { name: 'Enemy2', lat: 1000, lon: 1000 },
    { name: 'Enemy1', lat: 10, lon: 10 },
    { name: 'Enemy2', lat: 1000, lon: 1000 },
    { name: 'Enemy1', lat: 10, lon: 10 },
    { name: 'Enemy2', lat: 1000, lon: 1000 },
    // Add more enemies as needed
  ],
  teleport: [
    { name: 'Enemy1', lat: -33.2846, lon: -85.2539 },
    { name: 'Enemy2', lat: -27.9944, lon: -94.2188 },
    // Add more enemies as needed
  ],
  coal: [
    { name: 'Enemy1', lat: -33.2846, lon: -85.2539 },
    { name: 'Enemy2', lat: -27.9944, lon: -94.2188 },
    // Add more enemies as needed
  ],
  iron: [
    { name: 'Item1', lat: 17.7849, lon: 122.4194 },
    { name: 'Item2', lat: 17.7949, lon: 122.4194 },
    // Add more items as needed
  ],
  salt: [
    { name: 'Item1', lat: 27.7849, lon: 122.4194 },
    { name: 'Item2', lat: 27.7949, lon: 122.4194 },
    // Add more items as needed
  ],
  copper: [
    { name: 'Item1', lat: 37.7849, lon: 102.4194 },
    { name: 'Item2', lat: 37.7949, lon: 102.4194 },
    // Add more items as needed
  ],
  tin: [
    { name: 'Item1', lat: 37.7849, lon: 92.4194 },
    { name: 'Item2', lat: 37.7949, lon: 92.4194 },
    // Add more items as needed
  ],
  sulfur: [
    { name: 'Item1', lat: 37.7849, lon: 82.4194 },
    { name: 'Item2', lat: 37.7949, lon: 82.4194 },
    // Add more items as needed
  ],
};

// Initialize Leaflet map
const map = L.map('map').setView([37.8, -96], 4);

const osm = L.tileLayer('https://thetechnopig.github.io/assets/img/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add static image as the background
const imageUrl = 'https://cdn.discordapp.com/attachments/528733870082883592/1177698373134995587/map.png'; // Replace with your image URL
// Get the bounds of the entire map
const mapBounds = map.getBounds();
const imageBounds = [
  [mapBounds.getNorth() + 100, mapBounds.getWest() - 100], // Adjust latitude and longitude for top-left corner
  [mapBounds.getSouth() - 100, mapBounds.getEast() + 100], // Adjust latitude and longitude for bottom-right corner
];


L.imageOverlay(imageUrl, imageBounds).addTo(map);

// Function to add markers for game objects
function addMarkers(objects, layer) {
  objects.forEach(object => {
    const marker = L.marker([object.lat, object.lon]).bindPopup(object.name);
    layer.addLayer(marker);
  });
}

// Create layer groups for each type of game object
const scoutsLayer = L.layerGroup();
const ruinsLayer = L.layerGroup();
const teleportLayer = L.layerGroup();
const coalLayer = L.layerGroup();
const ironLayer = L.layerGroup();
const saltLayer = L.layerGroup();
const copperLayer = L.layerGroup();
const tinLayer = L.layerGroup();
const sulfurLayer = L.layerGroup();
// Add markers to respective layers
addMarkers(gameObjects.scouts, scoutsLayer);
addMarkers(gameObjects.ruins, scoutsLayer);
addMarkers(gameObjects.teleport, scoutsLayer);
addMarkers(gameObjects.coal, scoutsLayer);
addMarkers(gameObjects.iron, ironLayer);
addMarkers(gameObjects.salt, saltLayer);
addMarkers(gameObjects.copper, copperLayer);
addMarkers(gameObjects.tin, tinLayer);
addMarkers(gameObjects.sulfur, sulfurLayer);

// Create an object to store the layers
const overlayMaps = {
  'scouts': scoutsLayer,
  'ruins': scoutsLayer,
  'teleport': scoutsLayer,
  'coal': scoutsLayer,
  'iron': ironLayer,
  'salt': saltLayer,
  'copper': copperLayer,
  'tin': tinLayer,
  'sulfur': sulfurLayer,
};

// Add layer control to the map
L.control.layers(null, overlayMaps).addTo(map);

// Function to show coordinates under the cursor
function showCoordinates(e) {
  const coordinates = e.latlng;
  document.getElementById('coordinates').innerHTML = `Latitude: ${coordinates.lat.toFixed(4)}, Longitude: ${coordinates.lng.toFixed(4)}`;
}

// Add event listener for mousemove to show coordinates
map.on('mousemove', showCoordinates);
