const notification = document.querySelector('.notification')
const iconElement = document.querySelector('.weather-icon')
const tempElement = document.querySelector('.temperature-value p')
const descElement = document.querySelector('.temperature-description p')
const locationElement = document.querySelector('.location p')

const KELVIN = 273;

const key = "82005d27a116c2880f0fcb866998agit "


function getWeather(latitude, longitude) {
    let api= `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
}

function displayWeather() {

    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value} ° <span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

function celsiusToFahrenheit( temperature ) {

   return ( temperature * 9/5 )  + 32;

}

tempElement.addEventListener('click', function() {
    if (weather.temperature.value === undefined) return;
    if (weather.temperature.unit === 'celsius') {
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit =  Math.floor(fahrenheit);
        tempElement.innerHTML = `${fahrenheit}° <span>F</span>`
        weather.temperature.unit = "fahrenheit";
    } else {
        tempElement.innerHTML = `${weather.temperature.value}° <span>C</span>`

        weather.temperature.unit = 'celsius'
    }
})

function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);

}



function showError(error) {
    notification.Element.style.display = "block";
    notificationElement.innerHTML= `<p> ${error.message} </p>`
}




if("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(setPosition, showError)
}   else{
             notificationElement.style.display = "block";
             notificationElement.innerHTML = "<p>Browser Doesn't Support Geolocation</p>";

}


const weather = {
    temperature: {
        value: 18,
        unit: "celsius"
    },
    description: "few clouds",
    iconId: "01d",
    city: "London",
    country: "GB"


}


http://api.openweathermap.org/data/2.5/weather?lat=  lattiude  &lon=   longitude &appid= 0ebf0e29926cc939f557a936228e1129