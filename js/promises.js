fetch("https://api.github.com/users/USERNAME/events/public", {headers:{'Authorization': 'PERSONAL_ACCESS_TOKEN'}})
    .then((res) =>{



    console.log(res[0].actor.login)
})

