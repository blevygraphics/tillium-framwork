
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
        triggerElement: "section[data-animate='true']"
    })
    .setTween(".js-animate", 0.5, {
        color: "green", scale: 2.5}
    ) // trigger a TweenMax.to tween
    .addTo(controller);
 
