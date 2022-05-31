// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.

// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggle.addEventListener('click', () => {

//grab the hidden links container to apply show-links
// linksContainer.classList.toggle('show-links')
//show-links only applies height: 200px. why? because thats how big the ul needs the div to be. not ideal
//for non-dynamic data.   enter .getBoundingClientRect() : returns size and position of an element

    const containerHeight = linksContainer.getBoundingClientRect();
    // console.log(containerHeight) //prints an object with x, y, width, height and more props. height: 0
    const linksHeight = links.getBoundingClientRect().height
    console.log(links.getBoundingClientRect().height); //prints the height value of the obj. 201.6

    if (containerHeight.height == 0) {
        //if container height is default (hidden) then dynamically add height of linksHeight
        linksContainer.style.height = `${linksHeight}px`
    } else {
        //other situation is linksContainer alrdy open, so close it next button click by putting height back to 0
        linksContainer.style.height = 0 // inline styling monkeywrench
    }
    //now can add as many links as desired, will have correct height always (*with stylesheet auto !important)

})

const navbar = document.getElementById('nav') //console: nav#nav
const topLink = document.querySelector('.top-link') //console log: a.scroll-link.top-link
//now get height of navbar in event listener

// ********** fixed navbar ************
// once scrolled passed height of navbar, add fixed class so the navbar always stays. ditto for backToTop btn
window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset) //logs the verticle displacment of page currently    1471 = bottom
    //say if this value is > than height of navbar, add class .fixed-nav to navbar

    //height of navbar - scrollY == pageYOffset
    const scrollHeight = window.scrollY;
    const navHeight = navbar.getBoundingClientRect().height

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav')
    } else {
        navbar.classList.remove('fixed-nav')
    }

//back to top button now. pick some arbitrary number for the scroll height. when reached, make the el visible
    if (scrollHeight > 500) {
        topLink.classList.add('show-link')
    } else {
        topLink.classList.remove('show-link')
    }

})


// ********** smooth scroll ************
// select links and iterate over them. add event listener to each for a click event
const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        //now  prevent the default behavior.
        e.preventDefault();
        // next, want to get href attribute from current target (clicking) and use it to navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1) //slice chops off the # a href val
        // console.log(id)
        //now grab the sections which have id values by the same names as the <a> href attributes (w/o the #'s)
        const element = document.getElementById(id) //NOTE: NO QUOTES. i.e. about, services, etc FROM ID VAR goes in!
        //now get that element's positions with offsetTop
        let position = element.offsetTop;
        console.log(position) // prints (would-be) position of the sections on the y axis
        window.scrollTo({
            left: 0,
            top: position,
        });
        // now want to close the links bar when navigating on small screen by referencing the linksContainer again
        linksContainer.style.height = 0;
    });
});
