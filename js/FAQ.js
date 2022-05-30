//using selectors inside the element - not looking for the buttons parents,
//selecting questions/articles directly instead

const questions = document.querySelectorAll('.question')
// console.log(questions) // prints a 3 item nodelist of article.question items

//now loop with foreach
questions.forEach((question) => {
    // console.log(question); //prints 3 individual article.question els

    //select each button from its own question
    const btn = question.querySelector('.question-btn')
    // console.log(btn); //logs the 3 individual buttons

    btn.addEventListener('click', () =>{

        //add functionality to close all the other question if 1 is opened
        //select all the ?'s again
        questions.forEach((item) => {
            console.log(item) // prints all 3 article.questions, the clicked 1 with show-text

            //create logic where if the button clicked doesnt match up with the article,
            //then hide that article's text by removing it's show-text class
            if(item !== question) {
                item.classList.remove('show-text')
            }
        })


        question.classList.toggle('show-text')
    })

})

//add functionality to close all the other questions when clicking into one
//via a nested forEach. see above





// traversing the dom
//start by selecting all 3 question's span's buttons. loop over them, add click event to
//apply show text to the parent

// const btns = document.querySelectorAll('.question-btn');
// //now loop, adding event listener to current target
// btns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         //target grandparent div of the button clicked aka  "the question"
//         console.log(e.currentTarget.parentElement.parentElement)
//
//         let parentQuestionDiv = e.currentTarget.parentElement.parentElement;
//         parentQuestionDiv.classList.toggle('show-text')
//     })
// })

