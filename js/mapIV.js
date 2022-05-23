const api = {
    key: 'c3e106b1f73c8d31156bf7612f09654',
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector(".search-box")
searchbox.addEventListener('keypress', setQuery)

function setQuery(e) {
    if (e.keyCode == 13) {
        getResults(searchbox.value);
        // console.log(searchbox.value);
    }
}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);

}

function displayResults (weather) {
    // console.log(weather)
    let city = document.querySelector('.city')
    city.innerText = `${weather.name}, ${weather.sys.country}`

    let now = new Date();
    let date = document.querySelector('.date')
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.temp')
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`

    let weatherEl = document.querySelector('.weather')
    weatherEl.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`
}

function dateBuilder(d) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}

