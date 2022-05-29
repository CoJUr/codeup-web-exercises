const api = {
    key: "85010dae88335ee2601b9a6b915c07",
    baseurl: "https://api.openweathermap.org/data/2.5/"

}
const searchbox = document.querySelector('.search-box');
// make the input el for city search event using keypress
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) { //listen for enter key press
        console.log(searchbox.value) // prints entered city
        getResults(searchbox.value) //get result using user's input

    }
}

function getResults(query) {
    //query = a city
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(data => {
            console.log(data);
            return data.json();
        }).then(displayResults)
}

function displayResults (data) {
    console.log(data)
    let cityEl = document.querySelector('.location .city')
    cityEl.innerText = `${data.name}, ${data.sys.country}`

    let now = new Date();
    console.log(now)
    let dateEl = document.querySelector('.date');
    dateEl.innerText = dateBuilder(now)

    let tempEl = document.querySelector('.temp')
    tempEl.innerHTML = `${Math.round(data.main.temp)}°c`

    let weatherEl = document.querySelector('.weather')
    weatherEl.innerText = `${data.weather[0].main} -- ${data.weather[0].description} `

    let hilowEl = document.querySelector('.hi-low');
    hilowEl.innerHTML = `${Math.round(data.main.temp_min)}°c / ${Math.round(data.main.temp_max)}°c`
}

function dateBuilder(now) {
    //need the months and days arrays in here
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    let day = days[now.getDay()] //for the day of the week from the 'days' array

    let date = now.getDate() // for the day of the month
    let month = months[now.getMonth()] // the corresponding month from the 'months' array
    let year = now.getFullYear(); // the corresponding year

    return `${day} ${date} ${month} ${year}`;
}// return each of the above vars

