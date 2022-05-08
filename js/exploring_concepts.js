//combine variables with string literals with ${variable}
let category = `pie`;
let cake = `Apple ${category}`;

console.log(cake);


//performing operations inside a string by adding expressions in the ${}
let quantity = 20;
let price = 10;
 let cost = `Total cost : ${quantity * price}`;

console.log(cost);  //printed:   Total cost : 200


//leave out parenthesis when passing a string literal as an arguement
const greetings = (name) => {
    return `Konichi-wah ${name}!`;
}
console.log(greetings`Jane`);