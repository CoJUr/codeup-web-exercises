mapboxgl.accessToken = 'pk.eyJ1IjoiY2p1NzExIiwiYSI6ImNsM2Q1emV0aTA1OXMzaXFwbWcyanAwMXUifQ.67ZAGBIXYXWd5XvRzNIHtw';

navigator.geolocation.getCurrentPosition( successLocation, errorLocation, { enableHighAccuracy: true })

function successLocation (position) {
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap(navig[-2.24, 53.48])
}

function setupMap(center) {

    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: center, // starting position [lng, lat]
        zoom: 15 // starting zoom
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-left');

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,

    });



    map.addControl(directions, 'top-left');
}
