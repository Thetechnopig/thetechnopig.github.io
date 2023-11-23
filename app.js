// Sample data for different game objects
const gameObjects = {
  Scouts: [
    { name: 'Enemy1', lat: 37.7749, lon: -122.4194 },
    { name: 'Enemy2', lat: 37.7749, lon: -122.4294 },
    // Add more enemies as needed
  ],
  Iron: [
    { name: 'Item1', lat: 37.7849, lon: -122.4194 },
    { name: 'Item2', lat: 37.7949, lon: -122.4194 },
    // Add more items as needed
  ],
  Salt: [
    { name: 'Item1', lat: 37.7849, lon: -122.4194 },
    { name: 'Item2', lat: 37.7949, lon: -122.4194 },
    // Add more items as needed
  ],
  Copper: [
    { name: 'Item1', lat: 37.7849, lon: -122.4194 },
    { name: 'Item2', lat: 37.7949, lon: -122.4194 },
    // Add more items as needed
  ],
  Tin: [
    { name: 'Item1', lat: 37.7849, lon: -122.4194 },
    { name: 'Item2', lat: 37.7949, lon: -122.4194 },
    // Add more items as needed
  ],
  Sulfur: [
    { name: 'Item1', lat: 37.7849, lon: -122.4194 },
    { name: 'Item2', lat: 37.7949, lon: -122.4194 },
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
const enemyLayer = L.layerGroup();
const itemLayer = L.layerGroup();

// Add markers to respective layers
addMarkers(gameObjects.enemies, enemyLayer);
addMarkers(gameObjects.items, itemLayer);

// Create an object to store the layers
const overlayMaps = {
  'Enemies': enemyLayer,
  'Items': itemLayer,
};

// Add layer control to the map
L.control.layers(null, overlayMaps).addTo(map);
