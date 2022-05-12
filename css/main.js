"use strict"

function renderCoffee(coffee) {
    var html = '<div class="col-6 m-0 coffee">';
    html += '<div>' + '<span class="d-inline-block mx-2 name">' + coffee.name + '</span>' + ' ' + '<span class="roast">' + coffee.roast + '</span>' + '</div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }else if(selectedRoast === 'all'){
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function updateSearchCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var updateSearchCoffee = document.getElementById('search-text').value.toLowerCase()
    var updateSearchCoffees = [];
    coffees.forEach(function(searchInput) {
        if (searchInput.name.toLowerCase().includes(updateSearchCoffee)) {
            updateSearchCoffees.push(searchInput);
        }
    });
    tbody.innerHTML = renderCoffees(updateSearchCoffees);
}
function addCoffee(e) {
    e.preventDefault();
    var roast = document.getElementById("roast2").value;
    var coffeeName =document.getElementById("roast-name").value;
    var id = coffees[coffees.length -1].id + 1;
    coffees.push({id: id, name: coffeeName, roast: roast})
    updateCoffees(e);

}



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchText = document.querySelector("#search-text")



submitButton.addEventListener('click', updateCoffees);
searchText.addEventListener('keyup', updateSearchCoffees)
document.getElementById("roast-selection").addEventListener('change', updateCoffees)
document.getElementById("addSubmit").addEventListener('click', addCoffee);
// document.getElementById("coffees").innerHTML = ;