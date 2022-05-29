//using selectors inside the element

// traversing the dom
//start by selecting all 3 question's span's buttons. loop over them, add click event to
//apply show text to the parent

const btns = document.querySelectorAll('.question-btn');
//now loop, adding event listener to current target
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e.currentTarget)
    })
})

