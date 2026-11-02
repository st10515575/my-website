var map = L.map('map').setView([25.7479,28.2293], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//The pins and popups
L.marker([-25.7334624,28.2944352]).addTo(map)
    .bindPopup(`Silverton`);

L.marker([-25.7765197,28.3498802]).addTo(map)
    .bindPopup(`Silverlakes`);

L.marker([-25.6745024,28.1654627]).addTo(map)
    .bindPopup(`Pretoria North`);

L.marker([-25.7046208,28.2399758]).addTo(map)
    .bindPopup(`Gezina`);