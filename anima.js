// face drawing part
var $geoface = $("#geoface path");

TweenMax.set($geoface, {
  drawSVG: "50% 50%"
});

// $geoface.hide();

// $.wait = function(duration) {
// 	return $.Deferred(function(def) {
// 		setTimeout(def.resolve, duration);
// 	});
// };

// function setToPlay() {
// 	var svgFace = new Vivus('$geoface', {type: 'async', duration: 3000, start: 'manual'});
// 	$geoface.show();
// 	svgFace.play();
// };

//call the set to play
// $.wait(21000).then(setToPlay);


// the rest is in gsap
TweenMax.ticker.fps(60);

var $dances = $(".dance div"),
  $top = $(".top"),
	$ball = $(".ball"),
	$scene = $(".scene"),
  $boy = $(".boy"),
  $paper = $(".paper"),
  $grid = $(".grid"),
  $cloud1 = $(".cloud1"),
  $cloud2 = $(".cloud2"),
  $jump = $(".womanjump"),
  $ender = $(".ender div"),
  $titlecard = $(".titlecard"),
  $text = $(".text");


// the first scene
function sceneOne() {
  var tl = new TimelineLite();
  
  tl.fromTo($top, 1, {autoAlpha:1},{autoAlpha:0})
  .staggerTo( $dances, 2, {scale:0.1, repeat:3, yoyo:true, ease:Power2.easeOut}, 0.1)
	.staggerTo( $dances, 1.5, {rotation:"+=100", autoAlpha:0.4, scale:1.5, ease:Bounce.easeOut}, 0.5, "-=5")
	.staggerTo( $dances, 0.5, {rotation:-100, autoAlpha:0.2, scale:1.9, y:50, ease:Bounce.easeOut},  0.2, "-=5")
	.staggerTo( $dances, 1, { x:100, y:200, position:"absolute" },  0.2)
	.staggerTo( $dances, 1, { rotation:"+=150", autoAlpha:0.8, ease:Power2.easeOut}, 0.2)
	.staggerTo( $dances, 1, { rotation:"+=150", opacity:0, scale:0, ease:Power2.easeOut}, 0.2, "-=3")
	.from( $ball, 5, {autoAlpha:0, background:"#ec4b0b"}, "-=5");

	tl.timeScale(3);

  return tl;
}

// the second scene
function sceneTwo() {
  var tl = new TimelineLite();
  
  	tl.to( $ball, 3, {x:"-=365", y:"-=81", force3D: "auto"})
  	.add("scenein", "-=1.5")
  	.from($boy, 4, {scale:0.1, x:400}, "scenein")
  	.from($scene, 4, {scale:0.3, autoAlpha:0, force3D: "auto", x:2000}, "scenein")
  .to($geoface, 4, {drawSVG:true}, "scenein");
  tl.timeScale(1.5);
  
  return tl;
  
}

// the third scene
function sceneThree() {
  var tl = new TimelineLite();
  
    tl.from($paper, 5, {autoAlpha:0}, "+=1")
  	.to($paper, 4, {x:1000, yoyo:true, scale:2.0, ease:Power2.easeOut}, "-=1")
    .add("sceneout", "-=3.5")
    .to($scene, 3, {x:-2000, scale:0.3, force3D: "auto", ease:Power2.easeIn}, "sceneout-=1" )
    .to($ball, 6, {scale:0, force3D: "auto", ease:Bounce.easeOut}, "sceneout" );
    tl.to($geoface, 1, {opacity:0, scale:0.3, rotation:50, ease:Power2.easeOut}, "sceneout-=1" )
    .from($grid, 4, {scale:0.3, autoAlpha:0, x:2000}, "sceneout")
    .to($paper, 1, {x:200, y:-250, ease:Circ.easeInOut}, "-=2")
    .to($paper, 1, {x:550, top:100, position:"absolute", scale:1.6, rotation:100, ease:Circ.easeInOut}, "-=1");
  
  tl.timeScale(2);

  return tl;
}

// the fourth scene
function sceneFour() {
  var tl = new TimelineLite();
  
    tl.to($paper, 2, {autoAlpha:0, scale:0, y:100, rotation:"-=2000", transformOrigin:"50% 50%", ease:Power2.easeOut}, "-=1")
    .add("liberty", "-=1")
    .fromTo($cloud1, 12, {autoAlpha:0, scale:0.3}, {autoAlpha:0.5, scale:1, x:250, ease:Power2.easeOut}, "liberty")
    .fromTo($cloud2, 12, {autoAlpha:0, scale:0.3}, {autoAlpha:0.5, scale:1, x:-250, ease:Power2.easeOut}, "liberty")
    .fromTo($jump, 4, {autoAlpha:0, scale:0.1, force3D: "auto"}, {autoAlpha:0.85, scale:0.8, y:-200, force3D: "auto", ease:Power4.easeOut}, "liberty")
    .staggerFrom( $ender, 2, {scale:0.1, autoAlpha:0, repeat:3, yoyo:true, ease:Power2.easeOut}, 0.1, "liberty")
    .add("away", "-=5")
    .to($jump, 8, {scale:0.8, autoAlpha:0, y:50, force3D: "auto", ease:Power3.easeIn}, "away")
    .to($grid, 13, {scale:0.8, y:1000, force3D: "auto", ease:Power1.easeIn}, "away")
    .to($cloud1, 5, {autoAlpha:0.85, scale:0.8, x:-400, ease:Power1.easeIn}, "away")
    .to($cloud2, 5, {autoAlpha:0.85, scale:0.8, x:2000, ease:Power1.easeIn}, "away")
    .fromTo($titlecard, 2.2, {autoAlpha:0, scale:0.3}, {autoAlpha:0.9, scale:1, ease:Power4.easeOut}, "-=4")
    .fromTo($text, 2, {autoAlpha:0, scale:0.3}, {autoAlpha:0.9, scale:1, ease:Back.easeInOut}, "-=3.75");

  return tl;
  
  tl.timeScale(1.5);
}


var master = new TimelineLite();
master.add(sceneOne(), "scene1")
      .add(sceneTwo(), "scene2")
      .add(sceneThree(), "scene3")
      .add(sceneFour(), "scene4");

//master.seek("scene2+=3");


