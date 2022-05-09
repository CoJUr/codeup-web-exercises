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


//===============================
//over-ride superclass methods with subclass methods. give it the same name and any params
// as the method of the superclass.
class Human {
    constructor(weapon) {
        this.weapon = weapon;
        this.health = 100;
    }
    receiveDamage() {
        this.health = this.health - 10;
    }
}

class Wizard extends Human {
    receiveDamage() {
        this.health = this.health - 5;
    }
}

var wizard = new Wizard("staff");
console.log(wizard.health);
wizard.receiveDamage();
console.log(wizard.health)

//if want the behavior of the superclass method, can code super keyword(/method?)
// followed by the method of superclass into code block of subclass' version
class Human {
    constructor(weapon) {
    }
    attack() {
        console.log("Swing " + this.weapon)
    }
}

class Wizard extends Human {
    attack() {
        super.attack();
        // can add additional subclass attack behavior here if desired. cast a spell after the attack.
        console.log("fireball!");
    }
}
var wizard = new Wizard("staff");
wizard.attack();

//==========Paradigms===============
//one style/"paradigm" known as functional programming (FP), uses a lot of functions and variables.
// aka what we've been doing so far. Functions return new values, and those values are used elsewhere.
function getDistance(mph, h) {
    return mph * h;
}

var mph = 60;
var h = 2;

var distance = getDistance(mph, h);
console.log(distance) // prints 120

//another paradigm is called object-oriented programming (OOP). Group data and functionality as properties and
//methods inside objects.
//         var dog = {
//             hungry: true,
//             eat: function() {}
//         }
   // in OOP, use methods to update properties of object, instead of getting new return value
    var dog = {
        hungry: true,
        eat: function() {
            dog.hungry = false;
        }
    }
    dog.eat();
    console.log(dog.hungry) //prints   false

var car = {
    mileage: 12000,
    drive: function(miles) {
            car.mileage += miles;
        }
}

car.drive(100);
    console.log(car.mileage)  // prints   12100

//fp vs oop example: virtual piggy bank. oop wins.

function addMoney(value, amount) {
        return value + amount;
}

var value = 0;

var value = addMoney(value, 100);
value = addMoney(value, 50);
value = addMoney(value, 22)

console.log(value) // prints 172

//now with OOP
var myPiggy = {
    value : 0,
    addMoney: function (amount) {
        myPiggy.value = myPiggy.value + amount;
    }
};

myPiggy.addMoney(100);
console.log(myPiggy.value); // updated amount of 100 prints

// oop > fp
var rectangle = {
    base: 3,
    height: 4,
    getArea: function() {
        return this.base * this.height;
    }
};

rectangle.base = 10 // updating base value for easy re-use of below function
var area = rectangle.getArea();

console.log(area); // prints 40 instead of 12



// --------- INHERITANCE : creating objects from other objects for efficiency
var template = {
    greet: function() {
        console.log('Hi!');
    }
};

var person = Object.create(template)  // person object now inherited template object's methods.
person.greet() // prints    Hi!

// inheritance only lets the new object (person above) borrow the parent's method, it doesn't actually contain it.

// if want an object to truly have methods (or any properties), need to set them directly.
var car = {
    startEngine: function() {
        console.log('vroom vroom');
    }
};

var hybrid = Object.create(car);

hybrid.charge = function() {
    console.log('Using fuel to charge battery')
} // now the hybrid can charge with its new, owned method
hybrid.startEngine();
hybrid.charge();



//================ABSTRACTION
//abstraction is what we do in OOP to avoid interacting with too many low-level functionalities. Do this by
//implementing a few core functions/methods that handle all low-level work. also lets other devs use our class
//without needing to know how everything works. also introduces fewer potential bugs from user error.

class Car {
    constructor() {
        this.on = false;
    }
    injectFuel() {
        console.log('spraying fuel');
    }
    igniteFuel() {
        console.log('Boom!')
    }
    startUp() {
        this.on = true;
        while (this.on) {
            this.injectFuel();
            this.igniteFuel();
        }
    }
}

// calling the correct core method to handle low-level functionalithy of changing slides after displaying them:
class Slideshow {
    constructor(slides) {
        this.slides = slides;
        this.current = 1;
    }
    viewNextSlide() {
        this.current++;
    }
    play() {
        while (this.current <= this.slides) {
            console.log('Slide ' + this.current);
            this.viewNextSlide();
        }
    }
}

var slideshow = new Slideshow(5);
slideshow.play();  // prints slide 1   slide 2    slide 3 etc on each line



// ============ POLYMORPHISM - giving different behavior to the same method call across objects via override ======
class Car {
    alertOpenDoor() {
        console.log('Close 4 doors!');
    }
}

var coupe = new Car();

coupe.alertOpenDoor = function () {
    console.log('Close 2 doors');
};

coupe.alertOpenDoor();

// polymorphism can also be done with subclasses
class Car {
    lockDoors() {
        console.log('locking 4 doors');
    }
}

class Coupe extends Car {
    lockDoors() {
        console.log('locking 2 doors!');
    }
}

var coupe = new Coupe();
coupe.lockDoors();

// polymorphism done in an instance:
class Person {
    greet() {
        console.log('Hello!')
    }
}

class Professor extends Person {
    greet() {
        console.log('Salutations!');
    }
}

var professor = new Professor();
professor.greet = function() {
    console.log('Good news, everyone!');
}
professor.greet(); // prints   Good news, everyone




// =============== Integrating JS in HTML

//access the text of p element via assigning a variable and .innerHTML
var element = document.getElementById('messages');
console.log(element.innerHTML) // output:   New Messages (or whatever content displayed between tags)

element.innerHTML = "no messages" // updates page content to display   No Messages

//create an element with document.createElement() passing the element name in quotes
var paragraph = document.createElement("p")
//put content in the new element with a value between quotes after an assignment operator
paragraph.innerHTML = "content to display in the p"

// NESTING ELEMENTS
//nest a child p element inside the parent body element just created via .appendChild() method call on the parent
var bodyElement = document.getElementById("parent");
var paragraph = document.createElement("p")
paragraph.innerHTML = "content to display in the p"
//put the paragraph variable in the parenthesis of appendChild() to make it a child
bodyElement.appendChild(paragraph)

//REMOVE ELEMENTS
//first, code IDs to the element to be removed and to its parent.
// <body id="parent"
//     <h2>Facebook</h2>
//     <p id="child">Meg: Movie later? </p>
//then, in the <script>, after assigning variables to each element, access the parent and child with getElementById

    var bodyElement = document.getElementById("parent");
    var paragraph = document.getElementById("child");

    // remove the p element from the body with removeChild, passing the variable holding the child to be removed
bodyElement.removeChild(paragraph);

//==== SOURCING/INCLUDING .JS FILES INTO HTML
//when srcing/including external script file instead of adding js directly to the html, code 'document' in
// a console.log on the .js file to make the console show the html code printed out
console.log(document);// prints  [object HTMLDocument]  *the document object stores the content and tags of the page*

//--- more interacting:
//Buttons.   Without additional info, a button tag is useless. To react to clicks, a button tag needs the
//onclick attribute
<button onClick="">Click me</button>
// the onclick attribute can call functions from an included script when a visitor clicks on the button
<button onClick="sayHello()">Click me</button>

//can make the sayHello function change the content of an element (e.g. a paragraph) when a user clicks on the button.
function sayHello() {
    document.getElementById("prompt").innerHTML = "here, new content!"
};
//or make the button order an item
function orderItem() {
    document.getElementById("prompt").innerHTML = "Item ordered!"
}; // *with <button onclick="orderItem()">Order item</button>   <p id="prompt"></p>




//------- USER INPUT -----

//to access user input from an included script, add .value at the end of a getElement
var username = document.getElementById("usernameInput").value; //w usernameInput id on <input> element
// now can use it like any other value
function register () {
    var username = document.getElementById("usernameInput").value; // "register()" set to onclick value

    //can now use captured user input to update webpage.
    document.getElementById("message").innerHTML = username + " , you're signed up!";
}
// value of username var now displays on the page (in the p element with id="message") when clicking the button
console.log(username)


//works the same when capturing input from a textarea element
function addReview () {
    var review =
        document.getElementById("reviewText").value;
    //console.log(review) will print the user entered input

    var addedReview = document.getElementById("addedReview");
    addedReview.innerHTML = review
    //now the data captured in the review var is displayed on page using a <p id="addedReview"> when button clicked
}

//what happens when you set an input element value to an empty string "" ?
function register() {
    document.getElementById("usernameInput").value = "";
}
// A: it removes the text in the input field and shows the placeholder attribute's value when clicking the button


// access the input element (id value of "emailInput") to display its value in the console when clicking signup
function signUp() {
    var email = document.getElementById("emailInput").value
    console.log(email);
}



// ---- finding elements by location in the html document --------
console.log(document.body.firstElementChild.innerHTML) //prints content of h1 or whatever is the body's 1st child

