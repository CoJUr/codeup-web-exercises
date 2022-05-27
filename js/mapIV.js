const api = {
    key: 'c3e106b1f73c8d31156bf7612f09654',
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector(".search-box")
searchBox.addEventListener('keypress', setQuery)

function setQuery(e) {
    if (e.keyCode == 13) {
        //listening for if they press the enter key, if they do then pass the entered string into getResults
        getResults(searchBox.value);
        console.log(searchBox.value); // prints city name the user entered

    }
}
//once setQuery has run, get results from getResults below
function getResults (query) {
    //
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`) // ${query} is the value from searchBox
        .then(weather => {return weather.json(); // turn the response into json data
        }).then(displayResults); //then pass the json response into displayResults function

}

function displayResults (weather) {
    console.log(weather)
    let city = document.querySelector('.city')
    city.innerText = `${weather.name}, ${weather.sys.country}` //displayResults will populate the city div with the city and country name

    let now = new Date();
    console.log(now)
    let dateEl = document.querySelector('.date')
    dateEl.innerText = dateBuilder(now); //passing todays date to the created function for building the date, for displaying

    let temp = document.querySelector('.temp')
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>` //displaying the temperature in the temp div

    let weatherEl = document.querySelector('.weather')
    weatherEl.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`
}

function dateBuilder(d) {
    //need the months and days arrays in here
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    let day = days[d.getDay()] //for the day of the week from the 'days' array
    let date = d.getDate() // for the day of the month
    let month = months[d.getMonth()] // the corresponding month from the 'months' array
    let year = d.getFullYear(); // the corresponding year

    return `${day} ${date} ${month} ${year}`; // return each of the above
}

