"use strict";


$(document).ready(function() {
    //both lines accomplish the same thing, line 6 with jquery
    $('pageLink').html(value:"<h1>Link to somewhere</h1>");

//vanilla JS
// document.getElementById("pageLink").innerHTML = "<h1>link to somewhere</h1>"

    //class selector
    //returns an array of elements
    console.log($('.list-item'));

    //not manipulating a jquery object at this point
    $('.list-item')[0].innerHTML = 'Hello'


    //element selector
    $('main').css('background-color', 'cadetblue')

    //want to change more than 1 property, then pass an object with key-value pairs
    $('li').css( {
        'background-color': 'hotpink',
        'border-bottom': '1px solid black',
    })


    //selecting multiple elements. returns an array of element nodes
    $('h1, #pageLink, #list').css('color', 'forestgreen')

    //all selector example. select all elements and give borders.
    $('*').css('border', '2px dotted black')

});

