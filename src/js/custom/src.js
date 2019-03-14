
// Init Popper
$(function () {
    $('[data-toggle="popover"]').popover()
});


// ScrollMagic

// // init controller
// var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});


// // build scene
// var scene = 
//     new ScrollMagic.Scene({
//         triggerElement: "section[data-animate='true']"
//     })
//     .setTween(".js-animate", .5, {
//         color: "green"}
//     ) // trigger a TweenMax.to tween
//     .addTo(controller);


// init controller
var parallaxCtrl = new ScrollMagic.Controller();

// build scenes
$('.parallaxParent').each(function() {
    new ScrollMagic.Scene({triggerElement: this})
                .setTween('.parallax', {y: "80%", ease: Power2.EaseInOut})
                .addTo(parallaxCtrl);
});


// init controller
var controller = new ScrollMagic.Controller();

// loop through all elements
$('.fade-in').each(function() {
  
  // build a tween
  var tween = TweenMax.fromTo($(this), .8, { y: '80px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut });

  // build a scene
  var scene = new ScrollMagic.Scene({
    triggerElement: this,
    offset: 0
  })
  .setTween(tween) // trigger a TweenMax.fromTo tween
  .addTo(controller);
  
});
