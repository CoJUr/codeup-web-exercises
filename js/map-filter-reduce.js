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
// 1-2 create an array of the users who have at least 3 languages  using .filter
let multiLingual = users.filter(function(user) {
    if (user.languages.length > 2 ) {
        return user;
    }
})

//----walkthru :
let newUser = users.filter(user => user.languages.length >= 3)
console.log(newUser)

//------




//3   create an array of strings with each element being a user's email address   using .map
let emails = users.map(function(user) {
    return user.email
})

//walkthru ----
// const emails = users.map(user => user.email)
// console.log(emails)
// ------




//4 sum the yrs of exp from the list of users with .reduce

let result = users.reduce((accumulation, users) =>{
    return accumulation + users.yearsOfExperience
}, 0)

let average = result / users.length
console.log(average)

//walkthru -----
const totalYearsOfExperience = users.reduce((previousValue, currentValue) => {
    console.log(previousValue, currentValue);
    return previousValue+currentValue.yearsOfExperience
    console.log(totalYearsOfExperience)
}, 0)

let averageYears = totalYearsOfExperience / users.length

//------


//5 get the longest email out of the users emails with reduce

let longestEmail = users.reduce((previousEmail, currentEmail) => {
    console.log(previousEmail.email);
    if (previousEmail.length < currentEmail.email.length) {
        previousEmail = currentEmail.email
    }
    return previousEmail
}, "");
console.log(longestEmail)

//----walkthru
const longestEmail = users.reduce((previousValue, currentValue) => {

    if ( currentValue.email.length > previousValue.length ) previousValue = currentValue.email
    return previousValue
    //set initial value to nothing so you can compare
}, "")
console.log(longestEmail)
//-------


//6 get the user's names in a single string

let userNames = users.reduce((names, person) =>{
    if (person.name === 'justin'){
        return names += person.name
    } else {
        return names += `${person.name},`
    }
},'')
console.log(userNames)

const instructorsString = users.reduce((previousValue, currentValue, currentIndex, array) =>{
    let delimiter = ","

    if (currentIndex === (array.length-1)) delimiter = "."


    return previousValue + currentValue.name + delimiter + " "
}, "your instructors are: ")


//bonus - use .reduce to get a unique list of language from users
//walkthru:
const uniqueLanguages = users.reduce((previousValue, currentValue, currentIndex, array) =>{
    currentValue.languages.forEach(language =>{
        //get each language which is unique
        if (previousValue.indexOf(language) === -1) previousValue.push(language)
    })

    return previousValue
    //instantiate with an empty array
}, [])
console.log(uniqueLanguages)

