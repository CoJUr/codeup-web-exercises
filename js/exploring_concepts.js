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



//combine two string literals into one
let old = `Superman`;
let latest = `Spiderman`;
let movies = `${old}, ${latest}`;

console.log(movies);  //prints:    Superman, Spiderman


let ticketPrice = 500;
let persons = 5;

let total = `Total cost: ${ticketPrice * persons}`;
console.log(total); // prints   Total cost: 2500



//call a function with a string literal argument again
const likedBy = person => {
    return `Movie liked by: ${person}`;
}
console.log(likedBy`Hellen`);  //prints    Movie liked by: Hellen

//=================================== js classes

//to create new objects from classes, class need a special method called the constructor ().
// It sets the property values for a new object
class Book {
    constructor() {
    }
}

//sending parameters to the constructor method allows specifying of the values of the soon-to-be object
class Book {
    constructor(author, title) {
        //create new object property via this keyword, followed by a period and the property name.
        //finish creating the obj property, make assignments of the params to the appropriate 'this.'
        this.author = author;
        this.title = title;
    }
}
//now use the class. Start with variable creating syntax,  but then add 'new' keyword followed by Class().
var book1 = new Book();
// then, add the values for the new object inside the parenthesis
var book1 = new Book("Leo Tolstoy", "War and Peace");
var book2 = new Book("JRR tolkein", "Who is it")

console.log(book1); //prints    Book {author: 'Leo Tolstoy', title: 'War and Peace'}
console.log(book2);



// //adding a method to a class
// class VirtualPet {
//     constructor(name) {
//         this.name = name;
//     }
//     eat() {
//       console.log("nom nom");
//     }
// }
//
// //create an obj from the class so we can test out the method
// var pet = new VirtualPet("Tom");
//
// //use the method like normal- objectname.methodname()
// pet.eat()   //prints     nom nom



class VirtualPet {
    constructor(name) {
        this.name = name;
    }
    //adding a parameter and conditional statement to the object so it can react to the type of food passed to it
    eat(food) {
        if (food === 'treats') {
            console.log('nom nom');
        } else {
            console.log("discard");
        }
    }
}

var pet = new VirtualPet("Tom");

pet.eat();   //prints discard. interesante
pet.eat('treats') // yessir


//again
class Inventory {
    constructor(size) {
        this.size = size;
    }
    increase(unit) {
        this.size += unit;
    }
}

var bag = new Inventory(10);
bag.increase(5);
console.log(bag);

