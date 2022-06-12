// Crear la variable mapa con coordenadas de centro y zoom
let map = L.map('map').setView([-17.9647,-67.106], 14)

// Agregar mapa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



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


///marca donde se hace click
var mostrar_click = L.popup();

var x_clic,y_clic;
function onMapClick(e) {
    mostrar_click
        .setLatLng(e.latlng)
        .setContent("Hiciste click en:   " + e.latlng.toString())
        .openOn(map);
    document.getElementById("cordenada_x_ingreso").value = e.latlng.lat;
    x_clic = document.getElementById("cordenada_x_ingreso").value.latlng;
//
    document.getElementById("cordenada_y_ingreso").value = e.latlng.lng;
    y_clic = document.getElementById("cordenada_y_ingreso").value.latlng;
}

map.on('click', onMapClick);

var xStart,yStart,xEnd,yEnd; 
var puntoStart = [-18.007476, -67.136271];
var puntoEnd = [-17.927539, -67.118386];
function functionPathStart(){
    xStart = parseFloat(document.getElementById("cordenada_x_ingreso").value);
    yStart = parseFloat(document.getElementById("cordenada_y_ingreso").value);
    L.marker([xStart,yStart],{draggable: true}).addTo(map).openPopup();
    puntoStart = [xStart,yStart];
}
function functionPathEnd(){
    xEnd = parseFloat(document.getElementById("cordenada_x_ingreso").value);
    yEnd = parseFloat(document.getElementById("cordenada_y_ingreso").value);
    L.marker([xEnd,yEnd],{draggable: true}).addTo(map).openPopup();
    puntoEnd = [xEnd,yEnd];
}


// Volar a coordenadas de los sitios de la Lista desplegable
document.getElementById('select-location').addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,17);
    L.marker(coords,{draggable: true}).addTo(map).openPopup();///agregar una marca

    xEnd = parseFloat(coords[0]);
    yEnd = parseFloat(coords[1]);
    L.marker([xEnd,yEnd],{draggable: true}).addTo(map).openPopup();
    puntoEnd = [xEnd,yEnd];
});

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

var veinteVerde = L.polyline(camino_veinte_verde,{
    color: 'crimson'
}).addTo(map);

var microH = L.polyline(camino_h,{
    color: 'Turquoise'
}).addTo(map);

var cientoDiecisiete = L.polyline(camino_cientodiecisiete,{
    color: 'chocolate'
}).addTo(map);






///calculo de distancias entre puntos
function degreesToRadians(degrees){
    return degrees * Math.PI / 180;
}
function getDistanceBetweenPoints(lat1, lng1, lat2, lng2){
    let R = 6378137;
    let dLat = degreesToRadians(lat2 - lat1);
    let dLong = degreesToRadians(lng2 - lng1);
    let a = Math.sin(dLat / 2)
            *
            Math.sin(dLat / 2) 
            +
            Math.cos(degreesToRadians(lat1)) 
            * 
            Math.cos(degreesToRadians(lat1)) 
            *
            Math.sin(dLong / 2) 
            * 
            Math.sin(dLong / 2);

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let distance = R * c;

    return distance;
}


var rutas_transporte = [camino_uno_celeste_fni, camino_dos_verde_fni, camino_veintidos_verde_fni,camino_quince_verde];
var nombres_minis = ["Uno celeste FNI", "Dos verde","Dos Verde FNI","Veintidos Verde FNI"];
function getMinimumPath(){
    var posPathAnswer = 0;
    var posMinStart = 0;
    var posMinEnd = 0;
    var sumDistance = Infinity;
    var distancePathStart = 0;
    for(var path = 0; path < rutas_transporte.length; ++path){
        var v = rutas_transporte[path];
        for(var i = 0; i < v.length; ++i){
            var distanceCurrStart = getDistanceBetweenPoints(v[i][0],v[i][1],puntoStart[0],puntoStart[1]);
            for(var i2 = 0; i2 < v.length; ++i2){
                var distanceCurrEnd = getDistanceBetweenPoints(v[i2][0],v[i2][1],puntoEnd[0],puntoEnd[1]);
                if( sumDistance > (distanceCurrStart + distanceCurrEnd)){
                    sumDistance = distanceCurrStart + distanceCurrEnd;
                    posMinStart = i;
                    posMinEnd = i2;
                    posPathAnswer = path;
                    distancePathStart = distanceCurrStart;
                }
            }
        }
    }
    alert("Debes tomar el mini: " + nombres_minis[posPathAnswer] + " que esta a una distancia de: " + parseInt(distancePathStart) + " metros, caminando un total de " + parseInt(sumDistance) + " metros hasta tu destino.");
    
    
    
    L.polyline([rutas_transporte[posPathAnswer][posMinStart],puntoStart],{
        color: 'black'
    }).addTo(map);
    L.polyline([rutas_transporte[posPathAnswer][posMinEnd],puntoEnd],{
        color: 'black'
    }).addTo(map);
}



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



