$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: OPEN_WEATHER_APPID,
    lat:    30.266666,
    lon:   -97.733330,
    units: "imperial"
}).done(function(data) {
    console.log('The entire response:', data);
    console.log(data.daily[0].temp.day);
    $('#data').append("<h1>" + "Current temperature in Austin" + "</h1>"
        + "<p>" + data.current.temp + "</p>");
    for (let i = 0; i < 5; i++) {
            $('#data').append("<h2>" + " 5-Day Projected forecast: " + "</h2>" +
                "<p>" + "Average daily temperate: " + data.daily[i].temp.day + "</p>" +
            "<h6>" + "Expected high: " + data.daily[i].temp.max + " "
                + "Expected low: " + data.daily[i].temp.min + "</h6>")
        }
    })




// $.get("http://api.openweathermap.org/data/2.5/onecall", {
//     APPID: OPEN_WEATHER_APPID,
//     lat:    30.266666,
//     lon:   -97.733330,
//     units: "imperial"
// }).done(function(data) {
//     console.log('The entire response:', data);
//     console.log('Diving in - here is current information: ', data.current);
//     console.log(data.current.temp) // prints 83.46
//     // console.log(data.current.weather[0].description) //weather is an array. should print the word haze
//     // console.log(data.daily);
//     // data.daily.forEach(function(dailyForecast, index) {
//     //     if (index < 5) {
//     //         console.log(dailyForecast.temp.max) //prints an array with 8 items
//     //         console.log(dailyForecast.temp.min) //prints another 8 item array
//     //     }
//     //
//     // })
//     // console.log('A step further - information for tomorrow: ', data.daily[1]);
// });