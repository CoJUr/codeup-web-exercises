let weather = {
    apiKey: 'b928fc223761c64dc4bda9049f2acf',
    fetchWeather: function () {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='
            + city
            +'&units=metric&appid='
            + appKey
        ).then((response) => response.json())
            .then((data) => console.log(data))
    },
    displayWeather





}