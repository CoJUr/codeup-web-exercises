//Create a function named showMultiplicationTable that accepts a number and console.logs the
// multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(num) {
    return console.log(num * 1, num * 2, num * 3, num * 4, num * 5, num * 6, num * 7, num * 8, num * 9, num * 10);
}

showMultiplicationTable(3);


//Use a for loop and the code from the previous lessons to generate 10 random numbers between
// 20 and 200 and output to the console whether each number is odd or even. For example:
//123 is odd
// 80 is even
// 24 is even
// 199 is odd

for (var i = 0; i < 10; i++) {
    var theNumber = Math.floor(Math.random()*(200-20+1)) + 20
    if (theNumber % 2 === 0) {
        console.log(theNumber + ' is even')
    } else {
        console.log(theNumber + ' is odd')
    }
}




