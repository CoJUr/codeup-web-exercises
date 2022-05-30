//get only unique categories - hardest one
//iterate over categories, returning buttons
//ensure to only select buttons when they are available

//items
const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "/images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "/images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "/images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "/images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "/images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "/images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "/images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "/images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "/images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "steak dinner",
        category: "dinner",
        price: 36.99,
        img: "/images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    }
];

//on page load, access the menu array and dynamically populate the items
//start by targeting section-center div because it is the overall item parent

const sectionCenterEl = document.querySelector('.section-center')

const containerOfBtns = document.querySelector('.btn-container')

//grab filtering buttons
// const filterBtns = document.querySelectorAll('.filter-btn')
// console.log (filterBtns)
// after being dynamically created, cant access and filter them. empty nodelist printed.
//fix: target them after theyre added to the dom. (moved to line 155)

window.addEventListener('DOMContentLoaded', () => {
    // //now can set up a map method, iterate over the items to hydrate the html
    // let displayMenu = menu.map((item) => {
    //     console.log(item) // prints each individual object of the array
    //
    //     return `<article class="menu-item">
    //     <img src=${item.img} class="photo"
    //          alt=${item.title} />
    //     <div class="item-info">
    //         <header>
    //             <h4>${item.title}</h4>
    //             <h4 class="price">${item.price}</h4>
    //         </header>
    //         <p class="item-text">${item.desc}</p>
    //     </div>
    // </article>`
    // })
    // //now join in a string for display. use empty quotes to get rid of commas
    // displayMenu = displayMenu.join('')
    // // now append to page on the parent of the article el
    // sectionCenterEl.innerHTML = displayMenu
    // console.log(displayMenu) // prints the return statement 9x in 9 item array -- at the end it prints the one long string


    //setting up filtering. initially still pass in menu array. load items event.
    displayMenuItems(menu)
    displayMenuButtons();
    //get only unique items. step 1 iterate over array. return only categories
    // const categories = menu.reduce((values, item) => {
    //     //property (category) value is in the array being built ? push it in if no.
    //     if (!values.includes(item.category)) {
    //         values.push(item.category);
    //     }
    //     //else, return the array
    //     return values;
    // }, ['all']); //starting with 'all' at index[0] because no true all category
    //
    // console.log(categories) // logs an array of the category values
    //
    // //now that we got the categories, add them with buttons
    // const categoryBtns = categories.map((category) => {
    //
    //     //return the category value wrapped in the html of a button
    //     return `<button data-id=${category} class="filter-btn"
    //             type="button">${category}</button>`
    //
    // })
    //     .join("");
    // console.log(categoryBtns)
    // //now have the string of html buttons with corresponding data-ids and text
    //
    // //target the container for the buttons to hydrate
    // containerOfBtns.innerHTML = categoryBtns;
    // //have to move filter buttons here after dynamic refactor step
    // const filterBtns = document.querySelectorAll('.filter-btn')
    // filterBtns.forEach((btn) => {
    //     btn.addEventListener('click', function (e) {
    //         console.log(e.currentTarget.dataset.id) //logs the data-id values of button clicked
    //         const category = e.currentTarget.dataset.id
    //         //now filter depending on value of category var
    //         //create new array
    //         const menuCategory = menu.filter((menuItem) => {
    //
    //             //return the menu item only if its equal to the value (assigned data-id) in the category var
    //             if (menuItem.category === category)
    //                 return menuItem
    //         })
    //         console.log(menuCategory);
    //         // to display the 'all' id, which has no category in the array, catch-all to display the menu array
    //         if (category === 'all') {
    //             displayMenuItems(menu)
    //         } else {
    //             //else display the captured output from the filter
    //             displayMenuItems(menuCategory)
    //         }
    //
    //     })
    // })
})



// filter items. reference each button as param, and set event listener
// filterBtns.forEach((btn) => {
//     btn.addEventListener('click', function (e) {
//         console.log(e.currentTarget.dataset.id) //logs the data-id values of button clicked
//         const category = e.currentTarget.dataset.id
//         //now filter depending on value of category var
//         //create new array
//         const menuCategory = menu.filter((menuItem) => {
//
//             //return the menu item only if its equal to the value (assigned data-id) in the category var
//             if (menuItem.category === category)
//                 return menuItem
//         })
//         console.log(menuCategory);
//         // to display the 'all' id, which has no category in the array, catch-all to display the menu array
//         if (category === 'all') {
//             displayMenuItems(menu)
//         } else {
//             //else display the captured output from the filter
//             displayMenuItems(menuCategory)
//         }
//
//     })
// })    MOVED TO LINE 157 AFTER DYNAMIC REFACTOR


function displayMenuItems(menuItems) {
    //change menu.map to menuItems.map to iterate over the array being passed in
    let displayMenu = menuItems.map((item) => {
        // console.log(item)

        return `<article class="menu-item">
        <img src=${item.img} class="photo"
             alt=${item.title} />
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
    </article>`
    })
    displayMenu = displayMenu.join('')
    sectionCenterEl.innerHTML = displayMenu
}


function displayMenuButtons () {

    const categories = menu.reduce((values, item) => {
        //property (category) value is in the array being built ? push it in if no.
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        //else, return the array
        return values;
    }, ['all']); //starting with 'all' at index[0] because no true all category

    console.log(categories) // logs an array of the category values

    //now that we got the categories, add them with buttons
    const categoryBtns = categories.map((category) => {

        //return the category value wrapped in the html of a button
        return `<button data-id=${category} class="filter-btn"
                type="button">${category}</button>`

    })
        .join("");
    console.log(categoryBtns)
    //now have the string of html buttons with corresponding data-ids and text

    //target the container for the buttons to hydrate
    containerOfBtns.innerHTML = categoryBtns;
    //have to move filter buttons here after dynamic refactor step
    const filterBtns = document.querySelectorAll('.filter-btn')
    filterBtns.forEach((btn) => {
        btn.addEventListener('click', function (e) {
            console.log(e.currentTarget.dataset.id) //logs the data-id values of button clicked
            const category = e.currentTarget.dataset.id
            //now filter depending on value of category var
            //create new array
            const menuCategory = menu.filter((menuItem) => {

                //return the menu item only if its equal to the value (assigned data-id) in the category var
                if (menuItem.category === category)
                    return menuItem
            })
            console.log(menuCategory);
            // to display the 'all' id, which has no category in the array, catch-all to display the menu array
            if (category === 'all') {
                displayMenuItems(menu)
            } else {
                //else display the captured output from the filter
                displayMenuItems(menuCategory)
            }

        })
    })

}