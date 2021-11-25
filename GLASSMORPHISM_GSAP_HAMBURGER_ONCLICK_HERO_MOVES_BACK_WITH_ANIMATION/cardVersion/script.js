gsap.from(".nav-icon", {
  duration: 1.5,
  y: -300,
  x: -200,
  opacity: 0,
});
gsap.from("#butterfly", {
  duration: 2.5,
  x: 900,
  y: 100,
  opacity: 0,
});
gsap.from(".text", {
  duration: 1.5,
  x: 800,
  y: 100,
});

const tl = gsap.timeline({ paused: true });
tl.to(".nav-icon", 0.7, { yPercent: -20, opacity: 0 })

  .to(".nav-bar", 0.5, { xPercent: 20, yPercent: 20 })
  .to(".nav-bar", 0.9, { xPercent: -100 })
  .to(".nav-bar", 0.9, { xPercent: 0, zIndex: -99 })
  .to(".nav-bar", 0.9, { xPercent: 0, yPercent: 0, zIndex: -99 })
  .to(".nav-icon", 0.7, { yPercent: 0, opacity: 1, zIndex: 99 })

  .to("#second-line", 0.7, { xPercent: -100, opacity: 0 }, "<")

  .to("#first-line", 0.7, { rotation: 45, y: 20, width: 40 }, "<")
  .to("#third-line", 0.7, { rotation: -45, y: -20, width: 40 }, "<")
  //   .to(".box", 0.8, { x: 100, stagger: 0.3, opacity: 1 });
  .to(
    ".home",
    1,
    { yPercent: 40, xPercent: 10, opacity: 1, zIndex: 99, rotation: 360 },
    "<"
  )
  .to(
    ".news",
    1,
    { yPercent: 60, xPercent: 10, opacity: 1, zIndex: 99, rotation: 360 },
    ">"
  )
  .to(
    ".about",
    1,
    { yPercent: 80, xPercent: 10, opacity: 1, zIndex: 99, rotation: 360 },
    ">"
  )

  .to(
    ".faq",
    1,
    { yPercent: 100, xPercent: 10, opacity: 1, zIndex: 99, rotation: 360 },
    ">"
  )
  .to(
    ".contact",
    1,
    { yPercent: 100, xPercent: 10, opacity: 1, zIndex: 99, rotation: 360 },
    ">"
  );
const menuBtn = document.querySelector(".nav-icon");
let alfa = 0;
menuBtn.addEventListener("click", () => {
  menuBtn.classList.add("green");
  if (alfa == 0) {
    tl.play();
    alfa = 1;
  } else {
    tl.reverse();
    alfa = 0;
  }
});
