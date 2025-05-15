document.addEventListener("DOMContentLoaded", function () {
  var map = L.map('map').setView([51.2911, 4.4918], 12);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  L.circleMarker([51.2911, 4.4918], {
  radius: 25,
  color: '#705ABF',
  fillColor: '#705ABF',
  fillOpacity: 0.6
}).addTo(map)
  .bindPopup("Centrum Brasschaat")
  .openPopup();
});
