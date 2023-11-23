// Sample data for different game objects
const gameObjects = {
  scouts: [
    { name: 'Enemy1', lat: 37.7749, lon: -122.4194 },
    { name: 'Enemy2', lat: 37.7749, lon: -122.4294 },
    // Add more enemies as needed
  ],
  iron: [
    { name: 'Item1', lat: 17.7849, lon: -122.4194 },
    { name: 'Item2', lat: 17.7949, lon: -122.4194 },
    // Add more items as needed
  ],
  salt: [
    { name: 'Item1', lat: 27.7849, lon: -122.4194 },
    { name: 'Item2', lat: 27.7949, lon: -122.4194 },
    // Add more items as needed
  ],
  copper: [
    { name: 'Item1', lat: 37.7849, lon: -102.4194 },
    { name: 'Item2', lat: 37.7949, lon: -102.4194 },
    // Add more items as needed
  ],
  tin: [
    { name: 'Item1', lat: 37.7849, lon: -92.4194 },
    { name: 'Item2', lat: 37.7949, lon: -92.4194 },
    // Add more items as needed
  ],
  sulfur: [
    { name: 'Item1', lat: 37.7849, lon: -82.4194 },
    { name: 'Item2', lat: 37.7949, lon: -82.4194 },
    // Add more items as needed
  ],
};

// Initialize Leaflet map
const map = L.map('map').setView([37.7749, -122.4194], 13);

// Add static image as the background
const imageUrl = 'https://cdn.discordapp.com/attachments/1086411008316289154/1177331798921982002/Untitled-1.png'; // Replace with your image URL
const imageBounds = [[37.7749, -122.4194], [37.7849, -122.4294]]; // Replace with your image bounds
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
const ironLayer = L.layerGroup();
const saltLayer = L.layerGroup();
const copperLayer = L.layerGroup();
const tinLayer = L.layerGroup();
const sulfurLayer = L.layerGroup();
// Add markers to respective layers
addMarkers(gameObjects.scouts, scoutsLayer);
addMarkers(gameObjects.iron, ironLayer);
addMarkers(gameObjects.salt, saltLayer);
addMarkers(gameObjects.copper, copperLayer);
addMarkers(gameObjects.tin, tinLayer);
addMarkers(gameObjects.sulfur, sulfurLayer);

// Create an object to store the layers
const overlayMaps = {
  'scouts': scoutsLayer,
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
