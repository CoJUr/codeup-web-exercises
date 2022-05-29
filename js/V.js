let weather = {
    apiKey: 'b928fc223761c64dc4bda9049f2acf',
    fetchWeather: function (city) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='
            + city
            + '&units=metric&appid='
            + this.apiKey
        ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector('.city').innerText = `Weather in ${name}`
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/'+icon+'@2x.png'
        document.querySelector('.description').innerText = description
        document.querySelector('.temp').innerText = `${temp}°`
        document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`
        document.querySelector('.wind').innerText = `Wind speed: ${speed} km/h`
        //when displaying weather from api, remove the 'hidden' styling by removing the loading class from the weather div
        document.querySelector('.weather').classList.remove("loading")
        //change background image to randomize with entered search city
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random?" + name + "')"
    },
    search: function() {
        this.fetchWeather(document.querySelector('.search-bar').value)
    }
}

document.querySelector('.search button').addEventListener('click', function() {
    weather.search();
});
//add an event listened for the input box to listen for user pressing enter key
document.querySelector('.search-bar').addEventListener("keyup", function (e) {
    if (e.key === "enter") {
        weather.search()
    }
})

//hide dummy text on pageload. 1st give the div with class of weather an additional 'loading' class
weather.fetchWeather("Denver")