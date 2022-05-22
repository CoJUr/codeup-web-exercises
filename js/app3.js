const notification = document.querySelector('.notification')
const iconElement = document.querySelector('.weather-icon')
const tempElement = document.querySelector('.temperature-value p')
const descElement = document.querySelector('.temperature-description p')
const locationElement = document.querySelector('.location p')

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




if("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(setPosition, showError)
}   else{
             notificationElement.innerHTML = "<p>Browser Doesn't Support Geolocation</p>"
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