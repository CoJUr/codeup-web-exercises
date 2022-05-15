const colors = ["green", "red", "rgba(133,122,200)", "f15025"];
const btn = document.getElementById("btn");
const colorSpan = document.querySelector('.color')

btn.addEventListener('click', () => {
    // target the body to change the pages color
    // document.body
    //get random number between 0 - 3 (for the 4 item colors array)
    const randomNumber = getRandomNumber()
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    //display which is the active background color
    colorSpan.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}