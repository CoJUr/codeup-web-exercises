const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// 1-2
let multiLingual = users.filter(function(user) {
    if (user.languages.length > 3 ) {
        return user;
    }
})


//3   create an array of strings with each element being a user's email address   using .map
let emails = users.map(function(user) {
    return user.email
})

//4 sum the yrs of exp from the list of users with .reduce

let result = users.reduce((accumulation, users) =>{
    return accumulation + users.yearsOfExperience
}, 0)

let average = result / users.length
console.log(average)

5//