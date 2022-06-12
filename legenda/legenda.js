
const variable_legenda = L.control.Legend({
    position: "bottomright",
    collapsed: false,
    symbolWidth: 24,
    opacity:1,
    column:1,
    title: "Transporte publico Oruro",
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
        {
            label: "Camino 20 Verde",
            type: "polyline",
            color: "crimson",
            fillColor: "#FF0000",
            weight: 2,
            layers: veinteVerde
        }, 
        {
            label: "Camino micro H",
            type: "polyline",
            color: "Turquoise",
            fillColor: "#FF0000",
            weight: 2,
            layers: microH
        }, 
        {
            label: "Camino 117 rojo",
            type: "polyline",
            color: "chocolate",
            fillColor: "#FF0000",
            weight: 2,
            layers: cientoDiecisiete
        }, 
    ]
}).addTo(map);



