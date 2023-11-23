// Sample data for different game objects
const gameObjects = {
  Scouts: [
    { name: 'Enemy1', lat: 37.7749, lon: -122.4194 },
    { name: 'Enemy2', lat: 37.7749, lon: -122.4294 },
    // Add more enemies as needed
  ],
  Iron: [
    { name: 'Item1', lat: 17.7849, lon: -122.4194 },
    { name: 'Item2', lat: 17.7949, lon: -122.4194 },
    // Add more items as needed
  ],
  Salt: [
    { name: 'Item1', lat: 27.7849, lon: -122.4194 },
    { name: 'Item2', lat: 27.7949, lon: -122.4194 },
    // Add more items as needed
  ],
  Copper: [
    { name: 'Item1', lat: 37.7849, lon: -102.4194 },
    { name: 'Item2', lat: 37.7949, lon: -102.4194 },
    // Add more items as needed
  ],
  Tin: [
    { name: 'Item1', lat: 37.7849, lon: -92.4194 },
    { name: 'Item2', lat: 37.7949, lon: -92.4194 },
    // Add more items as needed
  ],
  Sulfur: [
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
const ScoutsLayer = L.layerGroup();
const IronLayer = L.layerGroup();
const SaltLayer = L.layerGroup();
const CopperLayer = L.layerGroup();
const TinLayer = L.layerGroup();
const SulfurLayer = L.layerGroup();
// Add markers to respective layers
addMarkers(gameObjects.Scouts, enemyLayer);
addMarkers(gameObjects.Iron, itemLayer);
addMarkers(gameObjects.Salt, enemyLayer);
addMarkers(gameObjects.Copper, itemLayer);
addMarkers(gameObjects.Tin, enemyLayer);
addMarkers(gameObjects.Sulfur, itemLayer);

// Create an object to store the layers
const overlayMaps = {
  'Scouts': enemyLayer,
  'Iron': itemLayer,
  'Salt': enemyLayer,
  'Copper': itemLayer,
  'Tin': enemyLayer,
  'Sulfur': itemLayer,
};

// Add layer control to the map
L.control.layers(null, overlayMaps).addTo(map);
