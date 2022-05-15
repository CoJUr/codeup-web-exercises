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


//        HTML TREE STRUCTURE
/* <!doctype html>              html  <-- 'the root node'
    <html>                      body
   </html>                   h1      p  <--- 'element nodes'
                                    text  <---'text nodes' (even though no < and >). any text on the page
 */
// ---- finding elements by location in the html document --------
console.log(document.body.firstElementChild.innerHTML) //prints content of h1 or whatever is the body's 1st child

// the keyword document targets the root HTML node
var htmlRoot = document // typed between the script tags ofc

//can access child nodes of the html node with .head and .body just like calling on object properties
var theHead = document.head
var theBody = document.body

//can then update nodes with .innerHTML. here, we remove all page content and replace with the following text
var theBody = document.body;
theBody.innerhtml = "where did the page go?"

//to get all children nodes of a node, use .children to return an array of all child nodes in order of appearance
var bodyChildren = document.body.children
//then select whichever one you want
bodyChildren[0].innerHTML = "who changed my heading" //selecting the first child and changing it

//similarly, .children[i] can select any single child
var probablyP = document.body.children[1]

//can also access the 1st child node directly with .firstElementChild
var heading = document.body.firstElementChild;
heading.innerHTML = "week 13";

//can access nearest sibling of an element node with .nextElementSibling
var theBody = document.head.nextElementSibling;
theBody.innerHTML = "page deleted";

//to retrieve individual html elements, use querySelector() method with the element inside the parens
function publish() {
    var el = document.querySelector("p");
    //and then can change it like normal using the variable
    el.innerHTML = "Website published";
}

//querySelector() works with all selectors, like tags classes, IDs. use css style of selecting
document.querySelector(".prompt") // selects element with class="prompt"

//the querySelector only retrieves the first element it finds. two elements with the same class, only grabs the 1st

//can access different element of the same class with query selector, same reference style as css
document.querySelector("p.prompt"); //accesses 1st paragraph of class='prompt'

//to access an element with multiple classes, can reference them all, one after the other
document.querySelector(".prompt.update")

//----ATTRIBUTES---

//can get elements by attributes and change the attributes. get attribute by adding a '.' followed by attribute name
var el = document.querySelector("img");
var paragraph = document.querySelector("p")
paragraph.innerText = el.src //variable storing the image now put in the paragraph on the page for display

//can update attribute values. place the value inbetween quotes
el.src = "https://website/image.png"  // image source now updated

//can change type attribute too
function changeQuestionType() {
    var le = document.querySelector("input");
    le.type = "checkbox";     // a whole different input
}

//can set a whole stylesheet in the same way
function addStyleSheet() {
    var op = document.querySelector("link");
    op.href = "style.css";  //previous href value of link tag replaced with style.css
}

//when changing multi-word properties, have to use camelCase
function changeColor() {
    var abc = document.querySelector("p")
    abc.style.backgroundColor = "#d7465f"
}

//changing style with JS works no matter if previous style was set inline or through a stylesheet
function changeStyle() {
    var abcd = document.querySelector("img");
    abcd.style.borderRadius = "45px";
}
// *note html setup:    <button onclick="changeStyle()">Update Profile Design</button>


//access and display the p element's background color on the page  (another 'button onclick=' one)
function showColor() {
    var xyz = document.querySelector("p");
    var div = document.querySelector("div")
    div.innerText = el.style.backgroundColor;
    //value of applied color (aliceblue) now displayed as text in the div on the page
}

//make the 1st a element a block element by changing its display value
function changeLayout() {
    var el = document.querySelector("a");
    el.style.display = "block";
}

//change an image's border style from whats set by the style.css
function changeStyle() {
    var changeImg = document.querySelector("img");
    changeImg.style.border = "5px solid lightGray"
}

//display an image's source attribute with getAttribute
function displayAttribute () {
    var img = document.querySelector("img");
    var imageLink = img.getAttribute("src")
    //can take a peak at whats in imageLink to be sure we grabbed the value by putting it in a paragraph of the html
    var p = document.querySelector('p');
    p.innerText = imageLink;
}
//another ex using a and href
function displayAttr() {
    var el = document.querySelector("a");
    var link = el.getAttribute("href")
    var p2 = document.querySelector("p");
    p2.innerText = link // displays http://abcxyz.com/  onclick
}

//can also grab all the values of an attribute like a style attribute
var linkStyles = el.getAttribute("style");
p.innerText = linkStyles //displays each key value pair on the page (color: red; font-size: 12px; etc etc but w/o quotes)

//document.querySelector("p").innerText = imageStyle     another syntax option

//SET ATTRIBUTES - an image src attribute in this feature. syntax: setAttribute("attribute", "new value")
function changeImage() {
    var ell = document.querySelector("img");
    ell.setAttribute("src", "https://blahblah.app/r/cats.pngs");
    //peak at it with a console log this time just to check, using GET Attribute
    console.log(ell.getAttribute("src"))
}

//change input type attribute this time
function changeType() {
    var yel = document.querySelector("input");
    yel.setAttribute("type", "range");
}

//add a placeholder attribute and set its value
var hij = document.querySelector("input");
hij.setAttribute("placeholder", "1234")


//CHANGING CLASS WITH setAttribute is problematic because it overrides the previous class
//better way to change class is with CLASSLIST


//to add a new class w/o overriding previous one, add the classList property. can then use it to access the add() method
function addBold() {
    var ill = document.querySelector("p")
    ill.classList.add("bold")  // class we want to add gets passed to add() like "bold"
}

//remove classes the same way, but with remove()
function removeBold() {
    var ill = document.querySelector("p")
    ill.classList.remove("bold")  // class we want to add gets passed to add() like "bold"
}

// combining the two ideas, the toggle method can add and take away the class with each button click
function toggleBold() {
    var ill = document.querySelector("p")
    ill.classList.toggle("bold")  // class we want to add gets passed to add() like "bold"
}

//can add or remove multiple classes at the same time
function removeClasses() {
    var gh = document.querySelector("p");
    gh.classList.remove("highlight", "underline"); // just put a comma between and each class gets quotes
}



//---QUERYSELECTOR---
//querySelectorAll() is very powerful. Lets us do more advanced searches like accessing 2 elements of diff class at once,
// or even a combo of elements by tag, id, and class as long as each seperated by a comma
function displayItems() {
    var el = document.querySelectorAll(".movie, .tech"); //finds class of EITHER movie OR tech, grabs them all
    var p = document.querySelector('p');
    p.innerText = el.length
}

//if want the classes with BOTH things, ommit the comma and space
var el = document.querySelectorAll (".sports.news");



// EVENTS
//a more manageable way of adding events is with event properties, like the .onclick property
function publish() {
    prompt.innerText = "website published!";
}
var prompt = document.querySelector("p");
var rel = document.querySelector("button");
//can call the function (aka event handler) on the event property with an = and the fn name, ommitting the parens
rel.onclick = publish;


//adding more events to elements. changing color of a div when it is clicked
function changeColor() {
    item.classList.toggle("pink");
}
var item = document.querySelector("div");
item.onclick = changeColor;
// with class .item on div in css sheet, default color of skyBlue and class .pink with background-color: pink

//another possible event: double click:
item.ondblclick = changeColor;

//yet another event: on scrolling through page. onscroll
function changeOnScroll() {
    textarea.style.backgroundColor = "aliceBlue";
}

var textarea = document.querySelector('textarea');
textarea.onscroll = changeOnScroll;

//this one triggers an event when an input field changes value. onchange property only triggers after change is done
function updateValue() {
    log.innerText = input.value;
}
var input = document.querySelector('input');
var log = document.getElementById('log');
input.onchange = updateValue;
//empty p tag with id="log" displaying the new text with each updated selected input choice


//and this one they call oninput. triggers an event anytime an element input changes at all. even by 1 character
function updateValue() {
    log.innerText = input.value.length;
}
var input = document.querySelector('input');
var log = document.getElementById('log');
input.oninput = updateValue()
//input and p tags are siblings here


//EVENT LISTENER STYLE - the most modern
//remove event listener method can remove events. add removeEventListener() to the event handler and wrap the element twice
function changeColor() {
    item.classList.toggle('pink');
    item.removeEventListener('click', changeColor);
}
var item = document.querySelector('div');
item.addEventListener('click', changeColor)

//removing elements is useful if want an event to happen only once. just remove the click event from inside
//the changeColor event handler.
function changeColor() {
    item.classList.toggle('pink');
    item.removeEventListener("click", changeColor);
}
var item = document.querySelector('div');
item.addEventListener("click", changeColor);


//can give an element multiple event handlers by adding them 1 by 1 with addEventListener() method
function changeWidth() {
    item.classList.toggle('width');
}

function changeHeight() {
    item.classList.toggle('height');
}

var item = document.querySelector('div');
var el = document.querySelectorAll("button");

el[0].addEventListener("click", changeHeight)
el[0].addEventListener("click", changeWidth)

 el[1].addEventListener("click", changeHeight)
el[2].addEventListener("click", changeWidth)


//another one
function markDone() {
    itemOne.classList.toggle('done');
}
var itemOne = document.querySelector('#item-1');

itemOne.addEventListener('click', markDone);
//** + using linked css style sheet with a .done selector applying text-decoration: line-through  on associated html file
//with a <li id="item-1">


//this one is similar to above, but removes the list item's text from the page
function removeItem() {
    itemOne.innerText = "";
}
var clearButton = document.querySelector('button');
var itemOne = document.querySelector('#item-1');
clearButton.addEventListener('click', removeItem)
//no css stylesheet needed


//more event listeners, this one uses touchstart which is a smartphone/touchscreen event. touchstart logs when users
//have begun to interact with an element.
document.getElementById('dog').addEventListener("touchstart", displayMessage);

function displayMessage() {
    document.getElementById('message').innerHTML = "whooff!";
}
//no css needed. <h3 id="message"> with sibling img in a parent container. img barks immediately when clicked/pressed


//touchmove, however, checks if user has interacted with an element for a prolonged time. drag finger across the element
document.getElementById("dog").addEventListener("touchmove", displayMessage);

function displayMessage() {
    document.getElementById('message').innerHTML = "woof!";
}

//touchend is just the opposite of touchstart. fires off when user removes finger from the element.
document.getElementById("dog").addEventListener("touchend", clearMessage);

function clearMessage() {
    document.getElementById('message').innerHTML = "";
    //removes displayed message when user lets go
}


//touchcancel checks if the touch event is interrupted. fires when touch turns into drag
document.getElementById('dog').addEventListener('touchcancel', cancelMessage);

function cancelMessage() {
document.getElementById('message').innerHTML = "wooof! touch event was interrupted!"
}
//run touch start add event here and displayMessage function below it as shown previously


// setTimeout / clearTimeout  and   clearInterval / setInterval WINDOW METHODS
// create a SetTimeout and stop it before it fires off
let timeoutID;

function delayTimer() {
    timeoutID = setTimeout(delayedFunction, 3000);
}
function delayedFunction() {
    alert("Three seconds elapsed");
}
function clearAlert() {
    clearTimeout(timeoutID, 1000)
}
delayTimer()
clearAlert()

//another short intro example from freecodecamp
//this code is executed first
console.log("Where can I learn to code for free and get a developer job?");
// this line indicates that the function definition will be executed once 3s have passed
setTimeout(codingCourse, 3000);
//function definition
function codingCourse() {
    console.log("freeCodeCamp");
}

//You can also pass further optional parameters to setTimeout(). (besides the mandatory first 2)
// function greeting(phrase,name) {
//   console.log(`${phrase}, my name is ${name}` );
// }
//
// setTimeout(greeting, 3000,"Hello world","John Doe");

//another freecodecamp, this time showing clearTimeout() method. have to set the timer to a variable to grab counter/ID.
let timeoutID = setTimeout(function(){
    console.log("Good Night");
}, 2000);

clearTimeout(timeoutID);
//now the Good Night code won't be executed
console.log("Good Morning!");


//update records problem fCC - Object Maniuplation
// function updateRecords(records, id, prop, value) {
//     return records;
// }
//
// updateRecords(recordCollection, 5439, 'artist', 'ABBA');
/*For the given id parameter, which is associated with the records object:
* If the value parameter isn’t an empty string, update (or set) the value parameter for the prop parameter.
* If the prop parameter is equal to "tracks" and the value isn’t an empty string, push the value onto the end of the tracks array.
* If value is an empty string, delete that prop from the object.
Finally, return records.
*/
    // function updateRecords(records, id, prop, value) {
    //     if (prop !== 'tracks' && value !== "") {
    //         records[id][prop] = value;
    //     } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    //         records[id][prop] = [value];
    //     } else if (prop === "tracks" && value !== "") {
    //         records[id][prop].push(value);
    //     } else if (value === "") {
    //         delete records[id][prop];
    //     }
    //     return records;
    // }

