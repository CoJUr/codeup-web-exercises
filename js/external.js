"use strict";
console.log("Hello from external JavaScript");
alert("Welcome to my Website!")
var response = prompt("Whats your favorite color?");
alert("Awesome, " + response + " is my favorite too!");

var priceDailyDollars = 3.00
var littleMermaidDays = 3
var brotherBearsDays = 5
var herculesDays = 1

let myOutOfPocket = (priceDailyDollars * littleMermaidDays) +
                    (priceDailyDollars * brotherBearsDays) + (priceDailyDollars * herculesDays)
myOutOfPocket = myOutOfPocket.toFixed(2)

var hoursWorkedGoogle = prompt("Please enter hours worked for Google");
var hoursWorkedAmazon = prompt("Please enter hours worked for Amazon");
var hoursWorkedFacebook = prompt("Please enter hours worked for Facebook");
var payrateHourlyGoogle = prompt("Please enter dollars paid per hour by Google");
var payrateHourlyAmazon = prompt("Please enter dollars earned per hour at Amazon");
var payrateHourlyFacebook = prompt("Please enter dollars paid per hour at Facebook");

var dollarsEarnedThisWeek = (hoursWorkedGoogle * payrateHourlyGoogle) +
    (hoursWorkedAmazon * payrateHourlyAmazon) + (hoursWorkedFacebook * payrateHourlyFacebook)
alert("You earned " + dollarsEarnedThisWeek + " USD this week");


var canEnroll = false
var classNotFull = true
var noConflicts = true

if (classNotFull && noConflicts) {
    let canEnroll = true
    console.log(canEnroll)
}


var offerGood = false
var boughtEnoughItems = true
var offerNotExpired = true
var isPremiumMember = true

if ((itemsBoughtEnough || isPremiumMember) && offerNotExpired) {
    let offerGood = true
    console.log(offerGood)
}


var username = 'codeup'
var password = 'notastrongpassword'

var passwordLongEnough = true
var passwordNotUsername = true
var usernameShortEnough = true
var passNotStartingWithWhiteSpaces = true
var usernameNotStartingWithWhiteSpaces = true
var passwordGood = false
var usernameGood = false


var response1 = [prompt('Please choose a username')];
while response1

var response2 = [prompt('Please choose a password')];
while

if (passwordNotUsername && passwordLongEnough && passNotStartingWithWhiteSpaces) {
    let passwordGood = true
    console.log(passwordGood)
}

if (usernameShortEnough && usernameNotStartingWithWhiteSpaces) {
    let usernameGood = true
    console.log(usernameGood)
}