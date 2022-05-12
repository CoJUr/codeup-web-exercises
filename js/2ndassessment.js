"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

// function checkForNumber (input) {
    // var isNumeric = !isNaN(parseFloat(input));
    // if (isNumeric === true) {
    //     return 'number'
    // } else if (isNumeric === false) {
    //     return 'not a number'
    // }
                                             //passed
                                            //     if (typeof input === 'number') {
                                            //         return 'number'
                                            //     } else if (typeof input !== 'number') {
                                            //         return 'not a number'
                                            //     }
                                            // }
        function checkForNumber(input) {
            if (typeof input === "number") {
                return "number"
            }

            return 'not a number'
        }

        function checkForNumber() {
            return (typeof input === "number") ? "number" : "not a number"
        }



// function evenOrOdd (x) {
//     if (x % 2 == 0) {
//         return 'even'
//     } else {
//         return 'odd'}
// }

        function evenOrOdd (input) {
            if (parseFloat(Math.abs(input % 2 === 1))) {
                return 'odd'
            }

            return 'even'
        }


                                            // function doubleTheElements (arr) {
                                            //     var outputArray = [];
                                            //     var doubledElement = 0
                                            //     for (var i = 0; i < arr.length; i ++) {
                                            //         doubledElement = (arr[i] * 2);
                                            //         outputArray.push(doubledElement);
                                            //     }
                                            //     return outputArray
                                            // }


        // function doubleTheElements(array) {
        //     for (var i = 0; i < array.length; i++) {
        //         array[i] *= 2;
        //     }
        //     return array
        // }

            function doubleTheElements(array) {
            array.forEach(function (item, index, array) {
                array[index] = item*2
            })
                return array
            }
                                            //
                                            // function sumOfElements (array) {
                                            //     var summed = 0
                                            //     for (var i = 0; i < array.length; i++) {
                                            //         summed = summed + array[i]
                                            //     }
                                            //     return summed
                                            // }

        function sumOfElements(array) {
            var total = 0;
            for (var i = 0; i < array.length; i++){
                total += array[i]
            }
            return total;
        }


                                                    // function totalPrice (array) {
                                                    //     var total = 0;
                                                    //     for (var i = 0; i < array.length; i++) {
                                                    //         total += array[i].price
                                                    //     }
                                                    //     return total
                                                    // }
                                                    //


            function totalPrice (array) {
            var total = 0;

            array.forEach(function (product) {
                total += product.price
            })

                return total;
            }

                                                        // function findHighestPrice(array) {
                                                        //     var highest = 0
                                                        //     for (var i = 0; i < array. length; i++) {
                                                        //         if (array[i].price > highest) {
                                                        //             highest = array[i].price
                                                        //         }
                                                        //     }
                                                        //     return highest
                                                        // }


            function findHighestPrice(array) {
            var  currentHighest = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i].price > currentHighest) currentHighest = array[i].price;
            }
            return currentHighest;
            }


                                                    // function discountCheck(obj) {
                                                    //     // obj.totalPrice = totalPrice()
                                                    //     // if (obj.items.totalPrice(this.items) >= 150) {
                                                    //     //     return true
                                                    //     // }
                                                    //     for (var i = 0; i < obj.items.length; i += 1) {
                                                    //         if (obj.items[i].amount > 150) {
                                                    //             return true;
                                                    //         } else if (obj.clubMember === true) {
                                                    //         } return true
                                                    //     }
                                                    // }
            function discountCheck(transaction) {

            var totalPrice = 0;
            //can reuse totalPrice function
                var total = totalPrice(transaction.items)

            if (total > 150 || transaction.clubMember) return true;

            return false;
            }




                                                function newProduct(str, num) {
                                                    var newObj = {};
                                                    return newObj = {name: str, price:num}
                                                }



        function newProduct(name, price) {

            return {
                name,
                price, }
        }





                                                    // function countWords(str) {
                                                    //     return str.split(" ").length;
                                                    // }

            function countWords(input) {
            return (input === "") ? 0: input.split(" ").length
            }



// Write a function named describeNumber that takes in an integer and will return an object
// describing different features of the input as a number. If the input is a number, the object
// should have three properties: value for the value passed, evenOrOdd which should
// be a string to identify whether the passed argument is evenly divisible by 2, and numberOfDigits
// which should count the number of digits in the argument passed into the function:

function describeNumber(input) {
            return {
                value: parseInt(input),
                //use evenOrOdd function from earlier
                evenOrOdd: evenOrOdd(input),
                numberOfDigits: input.toString().length,
            }
}


// Write a function named screamingSnakeCase that accepts a string that has several words each separated by a
// space, and returns a string with each word in all caps, and with the spaces replaced by underscores
// (ex. SCREAMING_SNAKE_CASE).

    // function screamingSnakeCase(input) {
    //         return input.toUpperCase().split(" ").join("_")
    // }
    //
    function screamingSnakeCase (input) {
            return input.toUpperCase().replaceAll(" ", "_")
    }