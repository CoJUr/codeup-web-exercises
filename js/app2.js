const inputValue = document.querySelector('.weatherInput')
const button = document.querySelector(".submit")

button.addEventListener('click', function() {

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=6286f997e626d4af0208815eae8aed27')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
})

