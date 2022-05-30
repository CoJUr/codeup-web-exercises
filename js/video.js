
// The DOMContentLoaded event fires when the initial HTML document has been completely
// loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

// The load event is fired when the whole page has loaded, including all
// dependent resources such as stylesheets and images. Hide preloader when load event fires.

//select button, then video container by class
const btn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')

//video controls
btn.addEventListener('click', () => {
    //check for the button with class slide, which is the blue <span> which slides left/right
    //move it right by applying the slide class to the button; removing the class slides it left

    if (!btn.classList.contains('slide')){
        btn.classList.add('slide')
        video.pause();
    } else{
        btn.classList.remove('slide')
        video.play();
    }

})

//now add preloader to display while video loads.  1st target preloader
const preloader = document.querySelector('.preloader')
//listen for the load event
window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader')
})

