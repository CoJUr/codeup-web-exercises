// const body = document.body
// // body.append("Hello World", "bye")
// //advantage of append vs appendChild is append can do strings. child does nodes
//
// const div = document.createElement('div')
// body.append(div)
//
// // div.innerText = "Hello World"
//
// div.textContent = "<strong>Hello world 2</strong>" //renders tags as text, just like innerText
//
// const strong = document.createElement("strong")
// strong.innerText = "hello 2 world"
// div.append(strong) //now the text gets bolded by the strong tags


//same result. difference? when viewing the text

// const div = document.querySelector('div')
//
//
// console.log(div.textContent) // textContent will 1.) maintain spacing and
// // 2. doesn't look at the css to see if the text is displaying, so invisible content is printed
//
// console.log(div.innerText) //inner text only prints the text thats visible on page. "bye" not there
//

const body = document.body
const div = document.querySelector('div')
const spanHi = document.querySelector('#hi')
const spanBye = document.querySelector('#bye')
//
//
// spanBye.remove()
// div.append(spanBye) //comes back. doesn't get irreplaceably deleted even tho dev tools make it seem that way.
//
// div.removeChild(spanBye) //Accomplishes the same thing as .remove()


// console.log(spanHi.getAttribute('id')); //prints the id  hi
//could also just do
console.log(spanHi.id); //does the same thing

console.log(spanHi.setAttribute('id', 'sdaji')) //new attribute displays on 'Elements'

spanHi.removeAttribute('title') // similarly, element no longer has title per 'Elements'

console.log(spanHi.dataset);
//prints an object {test: 'this a test'}. got rid of the 'data' part, just put 'test' as a property
//2nd example: now prints {test: 'this a test', longerName: 'yriw'} hyphen removed, camelCased property

console.log(spanHi.dataset.longerName) // only prints the value   yriw

spanHi.dataset.newName = 'hi'
// data-new-name added to the list per 'Elements'. console.log still calls it newName though


spanHi.classList.add('new-class')
spanHi.classList.toggle('hi2') //removed hi2 class because it was there already
spanHi.classList.toggle('hi3') //didn't exist, now it does.

spanHi.classList.toggle('hi3', true)
//passing a boolean as 2nd param. if pass false, h3 removed. if add true, class is added.
//great way to add or remove with a boolean alone.

spanHi.style.backgroundColor = 'red' // have to convert the css property to camelCase

//Sub-queries
//can do getElementBy on other elements or variables like it was the document
// var salsMotto = document.getElementById('salsMotto')
// //find the spans in salsMotto variable
// var mottoWords = salsMotto.getElementsByTagName('span')
// //log how many there are
// console.log(mottoWords.length)

.firstElementChild

.lastElementChild

.nextElementChild / .nextElementSibling
    .previousElementChild / .previousElementSibling
    .childNodes
    .childElementCount