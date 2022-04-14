//Create a function named showMultiplicationTable that accepts a number and console.logs the
// multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(num) {
    return console.log(num * 1, num * 2, num * 3, num * 4, num * 5, num * 6, num * 7, num * 8, num * 9, num * 10);
}

showMultiplicationTable(3);
// --------- walkthrough below

function showMultiplicationTable(number) {
    for (var i = 1; i <= number; i++) {      //goes from i to the max value
        total = i*number; //multiply the value
        console.log( number + " x " + i + " = " + total)
    }
}
showMultiplicationTable(7)



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

// ---------walkthrough below

function randomValue(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getOddOrEvenRandomNumber(numbersToGenerate, min, max) {
    for (var i = 1; i <= numbersToGenerate; i++) {
        var randomNumber = randomValue(min, max);
    }
}

        if(random % 2 === 0) {
            console.log(random + " is even");
        } else {
            console.log(random + " is odd");
        }

        //alternative simpler way with ternary
        // console.log(random + ((random % 2 === 0) ? "is even" : " is odd"))
getOddOrEvenRandomNumber(10, 20, 200)
// Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

function showDigitsMultipleTimes(max) {
            for (var i = 1; i <= max; i++) {
                var string = i.toString().repeat(i)
                console.log(string)
            }
}
        // alternative:
for (var i = 1; i <= max; i++) {
    var string = "";

    for (var j = 0; j < i; i++) {
        string += i;
    }

    console.log(string)

}

showDigitsMultipleTimes(9)
// Create a for loop that uses console.log to create the output shown below.
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5
//goes from 100 through 5 by 5 at a time
function subtractValueFromMax (max, substract) {
    for (var i = max; i >= 5; i -= subtract) {
        console.log(i);
    }
}

subtractValueFromMax(100, 5)