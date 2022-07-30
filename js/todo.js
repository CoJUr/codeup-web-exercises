const clear = document.querySelector(".clear");
const dateEl = document.getElementById("date");
const ulistEl = document.getElementById("ulist");
const inputEl = document.getElementById("item");

function insertAdjacentHTML() {

}

element.insertAdjacentElement(position, text);
//^ do this bc .innerHTML(text) will overwrite everything in the element

const CHECK = "fa-check-circle"; //for 'done' items
const UNCHECK = "fa-circle-thin";
//logic will check if item is done or not to determine what icon to show
const LINE_THROUGH = "lineThrough";

function addToDo(toDo, id, done, trash ){

    if(trash){
    //    if true, don't need to run any code because item is removed
        return;
    }

    const DONE = done ? CHECK : UNCHECK;
    //add a linethrough if check is true. empty string if false
    const LINE = done ? LINE_THROUGH : "";

    const text =
        `<li class={"item"}>
        <i class="fa ${DONE} co fa-circle-thin" job="complete" id="${id}"></i>
        <p class="text ${LINE}"> ${toDo} </p>
        <i class="de fa fa-trash-o" job="delete" id="${id}></i>
    </li>`

    // const position = "beforeend"; //every new item placed just before end / just after last child
    // list.insertAdjacentElement(position, text);
    list.insertAdjacentElement("beforeend", text);
}

function completeTodo(element) {
    element.classList.toggle(CHECK);
//    if they click on a checked item, remove the check class, otherwise add it,
//    adding/removing unchecked at the same time
    element.classList.toggle(UNCHECK)
//    now add a linethrough the checked item 'element'
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
//    now updating the list variable
    LIST[element.id].done ? false: true;
//    if done = false, change to true, and vice versa
}


// REMOVE A TODO
//if they click the trash icon, want to remove the whole parent node (li)
function removeToDo(element) {

    element.parentNode.parentNode.removeChild(element.parentNode);
//    now that the element is removed from the UI, update the list variable
    LIST[element.id].trash = true;
//    setting trash to true will remove the item from the list
}

//targeting an element created dynamically- problem: can't add event listener to the trash icon
//because it's not in the DOM yet, so select the parent element, which is the UL
const list = document.getElementById("ulist");
list.addEventListener("click", function(event) {

    let element = event.target
//    need to know the "job" attribute of the element that was clicked
    const elementJOB = event.target.attributes.job.value; //either delete or complete
//   if elementJOB = complete, run completeTodo function on the element
    if(elementJOB == "complete"){
        completeTodo(element);
    }
    else if(elementJOB == "delete"){
        removeToDo(element);
    }
});



//SAVE TO-DO-LIST TO LOCAL STORAGE
// localStorage.setItem('key', 'value');
// let variable = localStorage.getItem('key')

//RESTORE TO-DO-LIST FROM LOCAL STORAGE
let data = localStorage.getItem("TODO"); // pass in the key to get the value
//if user opens app for the 1st time, data will be null, so need to check and
// possibly create the list array, setting id to 0

let LIST, id;
if (data) {
//    data exists, so get the list
    LIST = JSON.parse(data);
//    getting the data from localStorage and parsing it into an array
//    then need to load the list into the UI
    loadToDo(LIST);
//    then set the id = the last item in the list array
    id= LIST.length;
//    e.g. if the last id was 10, then the next item must have id 11
}
else {
//    data doesn't exist, so create the list
    LIST = [];
//    set the id to 0
    id = 0;
}

function loadToDo(array) {
//    takes in the list array as a parameter. need to loop thru it, showing the items to the user
    array.forEach(function(item) {
        addToDo(item.name, item.id, item.done, item.trash);
    })
}

//CLEARING LOCAL STORAGE FUNCTIONALITY
const clear = document.querySelector(".clear");
clear.addEventListener("click", function() {
  localStorage.clear();
  location.reload(); //reload the page
})


//SHOW DATE
const dateElement = document.getElementById("date");

let options = { weekday: 'long', month: 'short', day: 'numeric' };
let today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options)





localStorage.setItem("TODO", JSON.stringify(LIST)); //LIST is an object so need to convert to string
//put this line whenever updating the LIST array

//store a to-do
let list = [];

list = [{}, {}, {}];

list[0] =
{
    name: "Drink Coffee", id : 0, done : false, trash : false
}
list[1] =
{
    name: "Work Out", id : 1, done : true, trash : false
//    cross/grey-out items when done is true. ditto for trash property
}

//update
document.addEventListener("keyup", function(event) {
    if (event.keycode == 13){
        //^when they press and release enter key
        const toDo = inputEl.value;

        if (toDo) {
        //    true if not empty
            addToDo(todo, id, false, false);
            list.push(
                { name: todo,
                    id: id,
                    done: false,
                    trash: false
                }
            );
            inputEl.value = "";
        //    incr an item id after adding it
            id++;
        }
    }
})