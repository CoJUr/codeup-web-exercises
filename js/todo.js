const clear = document.querySelector(".clear");
const dateEl = document.getElementById("date");
const ulistEl = document.getElementById("ulist");
const inputEl = document.getElementById("item");

function insertAdjacentHTML() {

}

element.insertAdjacentElement(position, text);
//^ do this bc .innerHTML(text) will overwrite everything in the element

function addToDo(toDo){

    const text =
        `<li class={"item"}>
        <i class="co fa fa-circle-thin" job="complete"></i>
        <p class="text "> ${toDo} </p>
        <i class="de fa fa-trash-o" job="delete"></i>
    </li>`

    const position = "beforeend";
//every new item placed just before end / just after last child

    list.insertAdjacentElement(position, text);
}



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