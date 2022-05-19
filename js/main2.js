var pageCounter = 1;

var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    var ourRequest = new XMLHttpRequest();   // this tool is grabbing AJAX and not XML data (nowadays)
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json')
    ourRequest.onload = function() {
        // console.log(ourRequest.responseText)
        var ourData = JSON.parse(ourRequest.responseText) //now the browser knows to expect JSON data instead of a string
        renderHTML(ourData)


    };
    ourRequest.send()
    pageCounter++
    if (pageCounter > 3) {
        btn.classList.add('hide-me')
    }
})




function renderHTML(data) {
    var htmlString = ""

    for (let i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species  + " that likes to eat "

        for (let j = 0; j < data[i].foods.likes.length; j++) {
            if (j == 0) {
                htmlString += data[i].foods.likes[j];
            } else {
                htmlString += " and " + data[i].foods.likes[j];
            }
        }

        htmlString += ' and dislikes ';

        for (let j = 0; j < data[i].foods.dislikes.length; j++) {
            if (j == 0) {
                htmlString += data[i].foods.dislikes[j];
            } else {
                htmlString += " and " + data[i].foods.dislikes[j];
            }
        }

        htmlString += '.</p>';
    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString)
}




// var ourRequest = new XMLHttpRequest();   // this tool is grabbing AJAX and not XML data (nowadays)
// ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json')
// ourRequest.onload = function() {
//   // console.log(ourRequest.responseText)
//     var ourData = JSON.parse(ourRequest.responseText) //now the browser knows to expect JSON data instead of a string
//
//     //log out the first item in the array from the response data
//     console.log(ourData[0])  //its meowsey
//
// };
// ourRequest.send()