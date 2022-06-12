const baseURL = "https://rogue-marked-gondola.glitch.me/movies"


const modal = {
    all: document.querySelector("#modal"),
    main: document.querySelector("#modal > main"),
    head: document.querySelector("#modal > header"),
    foot: document.querySelector("#modal > footer"),
    container: document.querySelector("#modal-container") // represents the background
}

const createForm = (name, data) => {

    $("html,body").animate({
        scrollTop:$('html, body').get(0).scrollHeight

    },500)
    if(!data) {
        data = {
            id: 0,
            title: "",
            director: "",
            rating: "",
            genre: "",
        }
    }

    let {id, title, director, rating, genre} = data;

    // handle Z in data for timezone, might need to add back for update
    // if(data) dateOfBirth = dateOfBirth.slice(0, dateOfBirth.length-1);

    return `
        <form name="${name}">
        <label for="field1">Title</label><br><input type="text" name="title" value="${title}" id="field1"><br>
        <label for="field2">director</label><br><input type="text" name="director" value="${director}" id="field2"><br>
        <label for="field3">Rating</label><br><input type="text" name="rating" value="${rating}" id="field3"><br>
        <label for="field4">Genre</label><br><input type="text" name="genre" value="${genre}" id="field4"><br>
        <input type="hidden" name="id" value="${id}" >
            
  
    </form>
    `
}


// document.getElementById('cancel')
// Headers this application uses across the board.
const customHeaders = new Headers({
    'Content-Type': 'application/json'
}) // required by the api to access its value!

// Defaults for fetch request
const fetchSettings = {
    method: "GET", // or gets
    headers: customHeaders,
}




fetch(baseURL + "?_start=1&_limit=35", fetchSettings)
    .then(res => res.json())
    .then(res => {
        console.log("res:", res)
        document.getElementById("movies").innerHTML +=
            res.map((item) => "<li><a>"+item.title+"</a></li>").join("<br>");

    })

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("userTable");
    for (i = 1; i < table.rows.length; i++) {
        row=table.rows[i];
        titleCell=table.rows[i].cells[0];
        txtValue = titleCell.textContent || titleCell.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            row.style.display= "";
        } else {
            row.style.display = "none";
        }
    }
}



const handleCreateUserView = (event) => {
    // TODO: Create form for users to fill out
    // Inputs!
    enableModal();
    console.log("test:",modal.main)
    modal.main.innerHTML = mapUserCreateForm();
    modal.foot.innerHTML = /*mapButtonsForUpdate(0,"create")*/ "<form><button class='confirm create'>Confirm</button><button class='cancel'>Cancel</button></form>"

    $('button.cancel').click( function (e) {
        e.preventDefault();
        toggleModal();
        document.location.reload();
    })
    $("button.confirm.create").click(handleDoCreateMovie);
    enableModal();
}



$("#create").click(handleCreateUserView);



// document.getElementById('modal-container').classList.remove('hide')
const handleDoCreateMovie = (event) => {
    // TODO: Create a new movie!
    event.preventDefault();

    const form = document.forms.create;

    let data = {

        title: form.title.value,
        director: form.director.value,
        genre: form.genre.value,
        rating: form.rating.value,
    }
    if(data.title.length<1 || data.director.length<1 || data.genre.length<1 || data.rating.length<1){
        alert("Enter data in all fields")
        return
    }
    // Data request to create a new one
    let settings = {
        ...fetchSettings,
        method: "POST",
        body: JSON.stringify(data)
    }

    fetch(baseURL , settings)
        .then(data => data.json())
        .then(data => {
            console.log("res:", data)
            document.location.reload()
        })
    // document.getElementById("userTable").innerHTML +=
    //     data.map((item) => item.title).join("");

}

const mapUserCreateForm = () => {
    modal.head.innerHTML=`<h2 id='movieForm'>Add New Movie</h2>`;
    return createForm("create")
}

const mapButtonsForUpdate = (id,  type='update') => {
    return ` <form>
          <button class="confirm ${type}" value="${id}">Confirm</button>
          <button class="cancel">Cancel</button>
            </form>`

}

const mapUserToUpdate = (data) => {
    modal.head.innerHTML=`<h2 id='movieForm'>Update Movie Data</h2>`;
    return createForm("update", data)
}



const handleDisplayUpdate = (event) => {
    enableModal();
    //console.log("event :", event);

    //TODO: Get Data from user by Id
    //TODO: Map to update form
    //TODO: Add handlers

    fetch(baseURL + "/" + event.target.value, fetchSettings)
        .then(res => res.json())
        .then(res => {

            modal.main.innerHTML = mapUserToUpdate(res);
            modal.foot.innerHTML = mapButtonsForUpdate(res.id);


            $("button.confirm.update").click(handleDoUpdate);



        })


};

const handleDoUpdate = (event) => {
    event.preventDefault();

    const form = document.forms.update;

    let data = {
        title: form.title.value,
        director: form.director.value,
        genre: form.genre.value,
        rating: form.rating.value,
    }

    let settings = {
        ...fetchSettings,
        method: "PUT",
        body: JSON.stringify(data)
    }

    fetch(baseURL + "/" + event.target.value, settings)
        .then(res => res.json())
        .then(res => {
            console.log("res:", res);
            // TODO: use this value to update the field record in the table
            disableModal();
            document.location.reload()
        })
}


// document.getElementById('.confirm').addEventListener('click', () => {
//     console.log("test")
// })


const handleDeleteView = (event) => {
    // console.log("handle Delete")

    $("html,body").animate({
        scrollTop:$('html, body').get(0).scrollHeight

    },500)
    modal.head.innerHTML = `<h3 class='confirmDelete'>Do you wish to delete this User?</h3>`
    modal.main.innerHTML = "<p class='confirmDelete>If you delete this User its gone forever.</p>"
    modal.foot.innerHTML = mapUserToDelete(event.target.value);

    $("button.confirm.delete").click(handleDoDelete);
    toggleModal();
};
$(".delete").click(handleDeleteView);


//  delete fetch request
const handleDoDelete = (event) => {
    event.preventDefault();

    // TODO: Delete User by ID
    // TODO: Hide Modal
    // TODO: Reload form

    let settings = fetchSettings;
    settings.method = "DELETE";

    fetch(baseURL + "/" + event.target.value, settings)
        .then(res => res.json())
        .then(res => {
            tableFetch().then(() => disableModal());
            document.location.reload()
        })

}

const mapUserToDelete = (id) => {
    return `<form>
          <button class="confirm delete" value="${id}">Confirm</button>
          <button class="cancel">Cancel</button>
    </form>
    `

}


const toggleModal = () => {
    // show hide modal logic
    modal.container.classList.toggle("hide")
    modal.all.classList.toggle("hide");
}

const enableModal = () => {
    modal.container.classList.remove("hide")
    modal.all.classList.remove("hide");
}

const disableModal = () => {
    modal.container.classList.add("hide")
    modal.all.classList.add("hide");
}


const handleDisplayProfile = (event) => {
    toggleModal();
    // TODO: Create fetch to get the profile information
    // TODO: Map info to modal in view.

    console.log("event.target.dataset.id", event.target.dataset.id);

    fetch(baseURL + event.target.dataset.id, fetchSettings)
        .then(res => res.json())
        .then(res => {
            // console.log("res user:", res)
            modal.foot.innerHTML = `<button class="close-modal">Close</button>`

            $(".close-modal").click(() => disableModal());


        })
}
$(".user-record").click(handleDisplayProfile);



const mapUserToRecord = ({id, director, rating, picture, title}) => {
    return `<tr data-id="${id}" >
                       

                       <td class="user-record">${title}</td>
                       <td>${director}</td>
                       <td>${rating}/5</td>
                       <td>
                            <button class="delete" value="${id}">X</button>
                            <button class="edit" value="${id}">Edit</button>
                       </td>
                   </tr>`

};
// $('button.cancel').click( function (e) {
//     console.log("test:")
//     e.preventDefault();
//     toggleModal();
// })

function tableFetch () {
    return fetch(baseURL + "?_start=1&_limit=25" + fetchSettings)
        .then(res => res.json())
        .then(res => {
            // want to map the users to the page
            // console.log("res:", res)
            // mapUserToRecord()

            console.log("res:", res)

            document.getElementById("movie").innerHTML =
                res.map(mapUserToRecord).join("");

            //event handlers!
            $(".delete").click(handleDeleteView);
            $(".edit").click(handleDisplayUpdate);
            // $(".user-record").click(handleDisplayProfile);
            // $("#create").click(handleCreateUserView);
        });
}
tableFetch()