const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn")
const colorSpan = document.querySelector('.color')
// hex color orange #f15025
btn.addEventListener('click', () => {
 let hexColor = '#';
 //make a loop that adds values to the hashtag. want it to run 5 times to get the 5 values after the # for hex colors
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    colorSpan.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})

function getRandomNumber () {
    return Math.floor(Math.random() * hex.length)
}