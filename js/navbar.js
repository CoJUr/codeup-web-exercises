// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggleBtn = document.querySelector('.nav-toggle')


const linksUl = document.querySelector('.links')

navToggleBtn.addEventListener('click', () =>{
    // console.log(linksUl.classList) //prints   1 item DOMTokenList: ['links'] value: 'links

    console.log(linksUl.classList.contains('random')) // prints false
    //if class is already there, remove it. if not, remove it. long way:
    // if(linksUl.classList.contains('show-links')) {
    //     linksUl.classList.remove('show-links')
    // } else {
    //     linksUl.classList.add('show-links')
    // }

    // short way:
    linksUl.classList.toggle('show-links')

})