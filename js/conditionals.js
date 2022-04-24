"use strict";
(function () {
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
    function analyzeColor(input) {
        if (input == 'blue') {
            return 'blue is the color of the sky'
        } else if (input == 'red') {
            return 'red is the color of passion'
        } else if (input == 'green') {
            return 'green is the color of envy'
        } else if (input == 'orange') {
            return 'orange like OJ'
        } else {
            return 'My maker left me ignorant of that color'
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

// var refactoredAnalyzeColor = "color"
//     switch (refactoredAnalyzeColor) {
//         case "blue":
//             console.log('the color of the ocean');
//             break;
//         case "red":
//             console.log('more red than anger')
//             break;
//         case "orange":
//             console.log("the Sun is orange")
//             break;
//         default:
//             console.log("it's some other color for goodness sake")
//             break;
//     }

    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */
//
    var colorPreference = prompt('What is your favorite color?');

    alert(analyzeColor(colorPreference) + "! :D")


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


    // let luckynum = prompt("please enter your assigned lucky number")
    // let totalBill = prompt("please enter your total amount due in USD")

    function calculateTotal(luckynum, totalBill) {
        let discount = 0
        if (luckynum == 0) {
            let discount = 1;
            alert("Sorry no discount, you have to pay: " + (discount * totalBill))
        } else if (luckynum == 1) {
            let discount = .9;
            alert("With 10% off you only pay: " + (discount * totalBill))
        } else if (luckynum == 2) {
            let discount = .75;
            alert("with your 25% off you only pay: " + (discount * totalBill))
        } else if (luckynum == 3) {
            let discount = .65;
            alert("with your 35% off you only pay: " + (discount * totalBill))
        } else if (luckynum == 4) {
            let discount = .50;
            alert("Wow, half off!! Just pay: " + (discount * totalBill))
        } else if (luckynum == 5) {
            let discount = 0;
            alert("Jackpot! You owe us: " + (discount * totalBill) + " congratulations!")
        }

    }

    // console.log(calculateTotal(luckynum,totalBill))
    // console.log(calculateTotal(2, 500))
    // console.log(calculateTotal(5, 400))


    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 5.
     * (In this line of code, 0 is inclusive, and 6 is exclusive)
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
// var randomDiscount = 0
var enteredBill = prompt("please enter your total bill before discount")
//     switch (luckyNumber) {
//         case "0":
//         case "1":
//         randomDiscount = 1;
//         alert("Sorry, you rolled a " + luckyNumber + "which means no discount, you have to pay: " + enteredBill);
//         break;
//         case "2":
//         randomDiscount = .75;
//         alert("you rolled a " + luckyNumber + "which is a 25% discount! With your pre-discount bill of " + enteredBill +
//             " you now only owe " + (randomDiscount * enteredBill));
//         break;
//         case "3":
//         randomDiscount = .65;
//         alert("you rolled a " + luckyNumber + "which is a 35% discount! With your pre-discount bill of " + enteredBill +
//             " you now only owe " + (randomDiscount * enteredBill));
//         break;
//         case "4":
//         randomDiscount = .5;
//         alert("you rolled a " + luckyNumber + "which is a 50% discount! With your pre-discount bill of " + enteredBill +
//             " you now only owe " + (randomDiscount * enteredBill));
//         break;
//         case "5":
//         randomDiscount = 0;
//         alert("you rolled a " + luckyNumber + "which is a 100% discount!! With your pre-discount bill of " + enteredBill +
//             " you owe exactly " + (randomDiscount * enteredBill) + ' ! Yes, that is 0 dollars!');
//         break;
//
//     }
//
//     var calculateTotalAgain = calculateTotal()
//
//     calculateTotalAgain(luckyNumber, enteredBill) {
//         alert("your lucky number was: " + luckyNumber + " and your bill before discount was: "
//             + enteredBill + " , so your final amount due is: "
//             + (enteredBill * discount))
//     }

// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
    var userAgreed = confirm("Hello, would you like to enter a number?")
    if (userAgreed) {
        alert("ok great, lets begin");
        let theNumber = prompt("please enter a number")
        if (typeof theNumber !== "number") {
            alert("that is not a number")
        } else if (typeof theNumber === "number") {
            alert("if we add 100 to that we get: " + (theNumber + 100))
        }
    } else {
        alert("I'll leave you be, then")
    }


//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * Do *NOT* display any of the above information
//  * if the user enters a value that is not of the number data type.
//  * Instead, use an alert to inform them of the incorrect input data type.
//  *
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
//  */

}());