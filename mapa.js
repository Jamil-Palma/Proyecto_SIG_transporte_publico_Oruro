// Crear la variable mapa con coordenadas de centro y zoom
let map = L.map('map').setView([-17.9647,-67.106], 14)

// Agregar mapa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Volar a coordenadas de los sitios de la Lista desplegable
document.getElementById('select-location').addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,15);
    let descripcionLugar = "";
    L.marker(coords,{draggable: true}).addTo(map).openPopup();///agregar una marca
})

// Agregar mapa base para el Mini Mapa
var carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {attribution: '©OpenStreetMap, ©CartoDB',subdomains: 'abcd',maxZoom: 24});

// Agregar plugin MiniMap
var minimap = new L.Control.MiniMap(carto_light,
    {
        toggleDisplay: true,
        minimized: false,
        position: "bottomleft"
    }).addTo(map);

// Agregar escala
 new L.control.scale({imperial: false}).addTo(map);

// Configurar PopUp
function popup(feature,layer){
    if(feature.properties && feature.properties.BARRIO){
        layer.bindPopup("<strong>Barrio: </strong>" + feature.properties.BARRIO + "<br/>" + "<strong>Localidad: </strong>" + feature.properties.LOCALIDAD);
    }
}

// Agregar capa en formato GeoJson
var barriosJS = L.geoJson(barrios,{
    onEachFeature: popup
}).addTo(map);

///marca donde se hace click
var mostrar_click = L.popup();

function onMapClick(e) {
    mostrar_click
        .setLatLng(e.latlng)
        .setContent("Hiciste click en:   " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);




var unoCelesteFni = L.polyline(camino_uno_celeste_fni,{
    color: 'blue'
}).addTo(map);

var dosVerdeFni = L.polyline(camino_dos_verde_fni,{
    color: 'green'
}).addTo(map);

var seisCelesteFni = L.polyline(camino_seis_celeste_fni,{
    color: 'yellow'
}).addTo(map);

var veintidosVerdeFni = L.polyline(camino_veintidos_verde_fni,{
    color: 'red'
}).addTo(map);

var quinceVerde = L.polyline(camino_quince_verde,{
    color: 'purple'
}).addTo(map);

var unoVerde = L.polyline(camino_uno_verde,{
    color: 'orange'
}).addTo(map);

var cientoDosRojo = L.polyline(camino_ciento_ocho_rojo,{
    color: 'pink'
}).addTo(map);



/** 


function myFunction(it) {
    //alert(it);
  }
oruro.forEach(myFunction);

alert(oruro[5]);
for(var i = 0; i < oruro.length; i++){
    alert(i);
}
*/