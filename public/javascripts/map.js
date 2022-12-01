var map = L.map('main_map').setView([4.6486259,-74.2478956],13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy: <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

$.ajax({
    dataType: "json",
    url: "api/bicicletasAPI",
    success: function(result){
        console.log(result);
        result.bicicletas.forEach(function(bici){
            L.marker(bici.ubicacion, {title:bici.id}).addTo(map);
        });
    }
});