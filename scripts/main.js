window.onload = function() {

  var tl = new TimelineMax({repeat:-1, repeatDelay: 3});

  //scene 1 - first screen of the banner
  tl.to("#title-container", 0.2, {ease: Power1.easeIn, opacity:1, scale:1, top:146});
  tl.to("#top-section", 0.5, {ease: Power1.easeOut, top:-244}, 1);
  tl.to("#title-container", 0.5, {ease:Power1.easeOut, scale:0.5, top:180}, "-=0.5");
  tl.to("#bottom-section", 0.5, {ease:Power1.easeOut, top:475}, "-=0.5");

  //scene 2 - enter photo1/slide left and fade
  tl.to("#photo1", 2, {ease: Linear.easeNone, left: -300}, "-=0.5");
  tl.to("#photo1", 0.4, {opacity: 0}, "-=0.4");

  //scene 3 - enter photo 2/slide right and fade
  tl.to("#photo2", 0.4, {opacity: 1}, "-=0.4");
  tl.to("#photo2", 2, {ease: Linear.easeNone, left: 0}, "-=0.5");

  //scene 4 - enter photo 3/slide right and fade
  tl.to("#photo3", 0.4, {opacity: 1}, "-=0.4");
  tl.to("#photo3", 2, {ease: Linear.easeNone, left: -300}, "-=0.5");

  //scene 5 - enter photo 4/remove top section
  tl.to("#photo4", 0.4, {opacity: 1}, "-=0.4");

  tl.to("#top-section", 0.5, {ease: Power1.easeOut, top:-500});

  //scene 6 - enter 70% sale with animations
  tl.to("#last-screen", 0.5, {ease: Power1.easeIn, opacity:1}, "-=0.3");
  tl.to("#upto-txt", 0.5, {ease: Power1.easeIn, opacity:1});
  tl.to("#percent-txt", 0.5, {ease: Power1.easeIn, opacity:1, scale:1});
  tl.to("#off-txt", 0.5, {ease: Power1.easeIn, opacity:1});



}
