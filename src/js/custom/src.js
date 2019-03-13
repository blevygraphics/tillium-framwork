
// Init Popper
$(function () {
    $('[data-toggle="popover"]').popover()
});


// ScrollMagic

// init controller
var controller = new ScrollMagic.Controller();


// build scene
var scene = 
    new ScrollMagic.Scene({
        triggerElement: "section"
    })
    .setTween("[data-animate='fadeIn'", 0.5, {
        backgroundColor: "green", scale: 2.5}
    ) // trigger a TweenMax.to tween
    .addTo(controller);
 
