import axios from "axios";


const directionsAPI = axios.create({
    baseURL:'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives:false,
        geometries:'geojson',
        overview:'simplified',
        language:'es',
        access_token:'pk.eyJ1IjoiZGFuZ29yaWFueiIsImEiOiJja21rcmZzYzExM3VyMnFtdW53N3A0NHRoIn0.MoNzoMXv3foggjhEdI3OeA'
    }
})

export default directionsAPI