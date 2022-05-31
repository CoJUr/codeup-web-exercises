import {PERSONAL_ACCESS_TOKEN} from "./keys.js";

// fetch("https://api.github.com/users/COjUR/events/public",
//     {headers:{'Authorization': 'PERSONAL_ACCESS_TOKEN'}})
//     .then((res) =>{ res.json()
//
//
//
//     console.log(res)
// })

//===walkthru
// import {PERSONAL_ACCESS_TOKEN} from "./keys.js";

const baseURL = "https://api.github.com/users/"

const setting = {
    headers: {
        // 'Authorization': 'token ' + PERSONAL_ACCESS_TOKEN
    }

}


const getUsersDateOfLastCommit = (username) => {
    return fetch(baseURL + username + "/events/public", setting)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            return res.filter((item) => item.type === 'PushEvent')[0].created_at;
        })

}

getUsersDateOfLastCommit("unfaiyted")
    .then(res => console.log(res))




// part 2

const wait = (time) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve();

        }, time)

    })

};
wait(2000).then(() => console.log("see me after 1sec"))










// ===================

const gitRequest =
    fetch("https://api.github.com/users/COjUR/events/public",
        setting)
        .then(function(response) {
            console.log(response)
            return response.json()})
        .then((data) =>  {
            console.log(data)
        })