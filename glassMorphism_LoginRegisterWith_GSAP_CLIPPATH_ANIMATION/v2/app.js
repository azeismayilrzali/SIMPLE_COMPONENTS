const tl = gsap.timeline();

const signBtn = document.querySelector("#sign");
signBtn.addEventListener("click", () => {
  tl.to(".circle", 0.7, { xPercent: 80, zIndex: 999 })
    .to(
      ".sign-in",
      0.7,
      {
        xPercent: -220,
      },
      "-=0.5"
    )
    .to(".sign-in-heading", 0.3, { textContent: "Login" }, "<")
    .to(
      ".email",
      0.7,
      {
        display: "flex",
      },
      "-=0.6"
    )
    .to(
      ".content-right",
      1,
      {
        xPercent: -400,
      },
      "-=1"
    )
    .to(".content-left", 1, { x: -700 }, "-=1");
});

const loginBtn = document.querySelector("#login");
loginBtn.addEventListener("click", () => {
  tl.to(".circle", 0.7, { xPercent: 0 })
    .to(".content-left", 1, { x: 700 }, "<")
    .to(".sign-in-heading", 0.3, { textContent: "Sign in" }, "<")

    .to(
      ".sign-in",
      0.7,
      {
        xPercent: 5,
      },
      "<"
    )
    .to(
      ".email",
      0.3,
      {
        display: "none",
      },
      "<"
    )

    .to(
      ".content-right",
      0.7,
      {
        xPercent: 0,
      },
      "<"
    );
});
