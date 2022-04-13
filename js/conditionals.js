"use strict";
(function(){
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(namedColor) {
    if (namedColor == 'blue') {
        return 'blue is the color of the sky'
    } else if (namedColor == 'red') {
        return 'red is the color of passion'
    } else if (namedColor == 'green') {
        return 'green is the color of envy'
    } else if (namedColor == 'orange') {
        return 'orange like OJ'
    } else {
        return 'its one of the other colors'
    }
}
// console.log(analyzeColor('yellow'))
// console.log(analyzeColor('blue'))
// console.log(analyzeColor('yellow'))
// console.log(analyzeColor('brown'))

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// analyzeColor(randomColor);
// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

var refactoredAnalyzeColor = "color"
    switch (refactoredAnalyzeColor) {
        case "blue":
            console.log('the color of the ocean');
            break;
        case "red":
            console.log('more red than anger')
            break;
        case "orange":
            console.log("the Sun is orange")
            break;
        default:
            console.log("it's some other color for goodness sake")
            break;
    }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var colorPreference = prompt('What is your favorite color?');

alert("Oh really? " + analyzeColor(colorPreference) + "!")

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
let discount = 1
function calculateTotal(luckynum, total) {
    if (luckynum === 0) {
        let discount = 1;
        return console.log("Sorry no discount, you have to pay: " + discount * total)
    } else if (luckynum === 1) {
        let discount = 0.9;
        return console.log("With 10% off you only pay: " + discount * total)
    } else if (luckynum === 2) {
        let discount = 0.75;
        return console.log("with your 25% off you only pay: " + discount * total)
    } else if (luckynum === 3) {
        let discount = 0.65;
        return console.log("with your 35% off you only pay: " + discount * total)
    } else if (luckynum === 4) {
        let discount = 0.50;
        return console.log("Wow, half off!! Just pay: " + discount * total)
    } else if (luckynum === 5) {
        let discount = 0.0;
        return console.log("Jackpot! You owe us: " + (discount * total) + " gratz!")
    }

}
    console.log(calculateTotal(1, 200))
    console.log(calculateTotal(2, 500))
    console.log(calculateTotal(5, 400))

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

}());