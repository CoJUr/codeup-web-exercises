const api = {
    key: 'c3e106b1f73c8d31156bf7612f09654',
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector(".search-box")
searchbox.addEventListener('keypress', setQuery)

function setQuery(e) {
    if (e.keyCode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);

}

function displayResults (weather) {
    console.log(weather)
}