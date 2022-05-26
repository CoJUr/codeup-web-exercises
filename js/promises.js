fetch(url, {headers:{'Authorization': 'PERSONAL_ACCESS_TOKEN'}}).then((res) =>{
    console.log(res[0].actor.login)
})

