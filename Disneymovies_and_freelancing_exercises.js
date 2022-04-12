var priceDaily = 3.00
var littleMermaidDays = 3
var brotherBearDays = 5
var herculesDays = 1
let myOutOfPocket = (priceDaily * littleMermaidDays) + (priceDaily * brotherBearDays) +
    (priceDaily * herculesDays);

let finalOutOfPocketDollars = myOutOfPocket.toFixed(2)
console.log(finalOutOfPocketDollars)

var hoursWorkedGoogle = 6
var hoursWorkedAmazon = 4
var hoursWorkedFacebook = 10
var payrateHourlyGoogle = 400
var payrateHourlyAmazon = 380
var payrateHourlyFacebook = 350

var myWeeklyPay = (hoursWorkedGoogle * payrateHourlyGoogle) +
    (hoursWorkedFacebook * payrateHourlyFacebook) +
    (hoursWorkedAmazon * payrateHourlyAmazon)
console.log(myWeeklyPay.toFixed(2))


var canEnroll = false;
var classNotFull = true;
var noConflicts = true;

if (classNotFull && noConflicts) {
    let canEnroll = true
    console.log(canEnroll)
}

var offerGood = false;
var itemsBoughtEnough = true
var offerIsNotExpired = true
var isPremiumMember = true

if ((itemsBoughtEnough || isPremiumMember) && offerIsNotExpired) {
    let offerGood = true;
    console.log(offerGood);
}

var username = 'codeup'
var password = 'notastrongpassword'

var passwordLongEnough = true;
var passwordNotUsername = true;
var usernameShortEnough = true;
var passNotStartingWithWhiteSpace = true;
var usernameNotStartingWithWhiteSpace = true;
var passwordGood = false;
var usernameGood = false;

if (passwordNotUsername && passwordLongEnough && passNotStartingWithWhiteSpace) {
    let passwordGood = true;
    console.log(passwordGood);
}

if (usernameNotStartingWithWhiteSpace && usernameShortEnough) {
    let usernameGood = true;
    console.log(usernameGood);
}