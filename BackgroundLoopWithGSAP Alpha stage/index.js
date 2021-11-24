// ! version 1

var fimg = document.getElementsByClassName("first")[0];

let tl1 = new TimelineMax({
  onStart: function(){ console.log('play') },
  onComplete: function(){ console.log('finish')
    fimg.style.top = "600px";
  },
});
tl1.to(".first", { y:-600, duration:3.1, ease:Linear.easeNone }, 0);
 
var t2 = TweenMax.to(".second", { y:-1200, duration:6, ease:Linear.easeNone, repeat:Infinity});
var t3 = TweenMax.to(".third", { y:-1200, duration:6, ease:Linear.easeNone, repeat:Infinity}, "3");
t2.play();
console.log('first started');
t3.play();
console.log("second started")



// !version 2


 
// var t2 = TweenMax.to(".second", { y:-1200, duration:10, ease:Linear.easeNone, repeat:Infinity});

// t2.play();
// console.log('first started');
// t3.play();
// console.log("second started")