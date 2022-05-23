$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: OPEN_WEATHER_APPID,
    lat:    30.266666,
    lon:   -97.733330,
    units: "imperial"
}).done(function(data) {
    console.log('The entire response:', data);
    console.log(data.daily[0].temp.day);
    console.log(data.daily[0].dt);
    console.log(dateBuilder(data.daily[0].dt));
    $('#current').append("<em>" + "Current temperature" + "</em>"
        + "<p>" + data.current.temp + "</p>");
    $('#hi-low').append("<em>" + "Today's High/low: " + data.daily[0].temp.max + " / "
        + data.daily[0].temp.min + "</em>");
    $('#humid').append("<em>" + "Today's Humidity: " + data.current.humidity + "</em>");
    $('#wind').append("<em>" + "Today's wind speed: " + data.daily[0].wind_speed + "</em>");
    $("#date").append(dateBuilder(data.daily[0].dt));
    var html1 = ''
    var html2 = ''
    for (let i = 0; i <= 4; i++) {
        var cardData = data.daily[i]
        html +=
        '<div class="col">' +
            '<div class="card">' +
               ' <h5 data-date="1" id="date0" class="card-title p-2">Date</h5>' +
                '<img'
                    'src="http://openweathermap.org/img/wn/10d@4x.png"'
                    'class="card-img-top"'
                    'alt="Weather description"'
                '/>'
                '<div class="card-body">'
                    '<h3 data-title="1" id="day0title" class="card-title">Weather</h3>'
                    '<p data-title="1" id="day0current" class="card-text"></p>'
                    '<p data-hilow="1" id="day0hi-low" class="card-text">  </p>'
                    '<p data-humid="1" id="day0humid" class="card-text"> + "Daily Humidity: " + data.daily[i].humidity + </p>'
                    '<p data-humid="1" id="day0wind" class="card-text"></p>'
                '</div>'
            '</div>'
            '<img'
                'src="http://openweathermap.org/img/wn/10d.png"'
                'alt="demo icon"'
            '/>-humid="1" id="day0wind" class="card-text"></p>'
    '</div>'


       '"<p>" + "<em>" + "Daily High/low: " + data.daily[i].temp.max + " "'
            '+ data.daily[i].temp.min + "</em>" +'
        '"<em>" + "Daily Humidity: " + data.daily[i].humidity +'
        ' + "Daily wind speed: " + data.daily[i].wind_speed + "</p>"'
        // dateBuilder(data.daily[0].dt);

        }





        $('#card p').html()


    })




function dateBuilder(timestamp) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let d = new Date(timestamp)
    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}


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