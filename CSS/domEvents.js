"use strict";

(function(){

    document.getElementById("moon-travel").addEventListener("click", function() {
        document.getElementById('main-content').style.backgroundImage = "url('img/moon-surface.png')"
        // now when clicking the fly me to the moon text, the background image changes to the moon picture
        document.getElementById('moon-travel').innerText = "whoa, look at the big ball of water/dirt"
        // now the click also causes the heading text to change
    })

    var goku = document.getElementById('goku'); //target to recieve behavior

    var gokuEvent = function () {
        goku.src = "img/goku-mad.png";
        goku.addEventListener("mouseout", function (){
            goku.src = "img/goku-normal.png";
        })
    }  // logic for the behavior

    goku.addEventListener("mouseover", gokuEvent) //registered the event


    //remove events: mouseover event
    document.querySelector('.goku-chill').addEventListener("click", function(){
        goku.removeEventListener("mouseover", gokuEvent)
    })

    //keyboard event
    //when pressing spacebar, chang the display property to inline to make the space-bar img appear
    document.addEventListener("keyup", function(event) {
        console.log(event)
        if (event.key === " ") {
            document.querySelector(".space-bar").style.display = "inline";
        }
    })

    //with button click, change the color property value of body to whatever is typed into the input
    document.getElementById("color-btn").addEventListener("click", function(){
        var pickedColor = document.getElementById('text-color').value; //user input color now captured
        document.getElementById("main-content").style.color = pickedColor // color now set to value of input
    })


    //CHANGE EVENT
    //when option is selected/changed, change the innerHTML of class=result element to state item as important
    document.querySelector("#travel-items").addEventListener("change", function(event) {
        console.log(event)
        document.querySelector(".result").innerHTML = "I agree that " + event.target.value + " is important too"
    })

    //in essence:  target.addEventListener(type, callbackFn(){
    //code here will happen when the event fires off
    // })

})()