import axios from "axios";


const searchAPI = axios.create({
    baseURL:'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit:10,
        language:'es',
        access_token:'pk.eyJ1IjoiZGFuZ29yaWFueiIsImEiOiJja21rcmZzYzExM3VyMnFtdW53N3A0NHRoIn0.MoNzoMXv3foggjhEdI3OeA'
    }
})

export default searchAPI