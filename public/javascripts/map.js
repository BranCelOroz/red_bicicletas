var map = L.map('main_map').setView([4.6486259,-74.2478956],13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy: <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([4.5794602,-74.1596994]).addTo(map);
var marker = L.marker([4.6149126,-74.0956123]).addTo(map);
var marker = L.marker([4.6135783,-74.0660777,17]).addTo(map);