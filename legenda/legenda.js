var marcador_virgen = L.circleMarker(L.latLng(-17.974794, -67.120543),{
    radius: 6,
    fillColor: "#ff0000",
    color: "blue",
    weight: 2,
    opacity: 1,
    fillOpacity: 0.6
}).addTo(map);

const variable_legenda = L.control.Legend({
    position: "bottomright",
    collapsed: false,
    symbolWidth: 24,
    opacity:1,
    column:1,
    title: "Caminos transporte publico Oruro",
    legends: [
        {
            label: "Camino 1 celeste FNI",
            type: "polyline",
            color: "blue",
            fillColor: "#FF0000",
            weight: 2,
            layers: unoCelesteFni
        }, {
            label: "Camino 2 verde",
            type: "polyline",
            color: "green",
            fillColor: "#FF0000",
            weight: 2,
            layers: dosVerdeFni
        }, 
        {
            label: "Camino 6 celeste",
            type: "polyline",
            color: "yellow",
            fillColor: "#FF0000",
            weight: 2,
            layers: seisCelesteFni
        }, 
        {
            label: "Camino 22 verde",
            type: "polyline",
            color: "red",
            fillColor: "#FF0000",
            weight: 2,
            layers: veintidosVerdeFni
        }, 
        {
            label: "Camino 15 verde",
            type: "polyline",
            color: "purple",
            fillColor: "#FF0000",
            weight: 2,
            layers: quinceVerde
        }, 

        {
            label: "Camino 1 verce",
            type: "polyline",
            color: "orage",
            fillColor: "#FF0000",
            weight: 2,
            layers: unoVerde
        }, 
        {
            label: "Camino 108 rojo",
            type: "polyline",
            color: "pink",
            fillColor: "#FF0000",
            weight: 2,
            layers: cientoDosRojo
        }, 
    ]
}).addTo(map);


