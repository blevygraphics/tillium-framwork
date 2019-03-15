
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




// // build scenes
// $('.parallaxParent').each(function() {
//     new ScrollMagic.Scene({triggerElement: this})
//                 .setTween('.parallax', {y: "80%", ease: Power2.EaseInOut})
//                 .addTo(controller);
// });


// init controller
var controller = new ScrollMagic.Controller();

// loop through all elements
$('.fade-in').each(function() {
  
  // build a tween
  var tween = TweenMax.fromTo($(this), .8, { y: '80px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut });

  // build a scene
  var scene = new ScrollMagic.Scene({
    triggerElement: this,
    offset: -300
  })
  .setTween(tween) // trigger a TweenMax.fromTo tween
  .addTo(controller);
  
});

// get all slides
var slides = ["#parallax-h1", "#parallax-h2", "#parallax-h4", "#parallax-h8"];

// SCENE 4 - parallax effect on each of the slides with bcg
// move bcg container when slide gets into the view
slides.forEach(function (slide, index) {

  var $bcg = $(slide).find('.parallax');

  var slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: slide, 
        triggerHook: 1,
        duration: "300%"
    })
    .setTween($bcg, 1, {y: '80%', ease:Power0.easeNone})
    .addTo(controller);
  });
