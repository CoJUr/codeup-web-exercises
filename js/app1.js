var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')


button.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=')
        .then(response => response.json())
        .then(data => {
            var nameValue = data.name;
            var tempValue = data.main.temp;
            var descValue = data.weather[0].description;

            name.innerHTML = nameValue
            temp.innerHTML = tempValue
            desc.innerHTML = descValue
            console.log(data)
    })



        .catch(error => alert("wrong city name"))
})

$.get('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=6286f997e626d4af0208815eae8aed27', {
    APPID: OPEN_WEATHER_APPID,
    lat:    30.266666,
    lon:   -97.733330,
    units: "imperial"
})