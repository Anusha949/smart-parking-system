// Initialize the map
const map = L.map('map').setView([17.387, 78.487], 15);

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Function to fetch and display parking spots
function loadData() {
  fetch('http://127.0.0.1:5000/api/parking')
    .then(response => response.json())
    .then(spots => {
      // Remove old markers (only CircleMarkers)
      map.eachLayer(layer => {
        if (layer instanceof L.CircleMarker) {
          map.removeLayer(layer);
        }
      });

      // Add new markers
      spots.forEach(spot => {
        const color = spot.status === "Available" ? "green" : "red";

        const marker = L.circleMarker([spot.lat, spot.lon], {
          color,
          radius: 10,
          fillOpacity: 0.8
        }).addTo(map);

        // Create popup content with "Reserve" button if available
        const popupContent = `
          <b>Spot ID:</b> ${spot.id}<br>
          <b>Status:</b> ${spot.status}<br>
          ${spot.status === "Available" ? `<button onclick="reserveSpot(${spot.id})">Reserve</button>` : ""}
        `;

        marker.bindPopup(popupContent);
      });
    })
    .catch(error => {
      console.error('Error fetching parking data:', error);
    });
}

// Function to reserve a spot via POST request
function reserveSpot(spotId) {
  fetch(`http://127.0.0.1:5000/api/parking/${spotId}`, {
    method: 'POST'
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      loadData(); // Refresh after reservation
    })
    .catch(error => {
      console.error('Reservation error:', error);
      alert('Failed to reserve spot.');
    });
}

// Initial load and periodic refresh
loadData(); // Load once at page start
setInterval(loadData, 10000); // Refresh every 10 seconds
