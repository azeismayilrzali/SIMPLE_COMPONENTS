const checkDiv = document.querySelector(".button-class");
const modeBtn = document.querySelector(".mode");

checkDiv.addEventListener("click", () => {
  modeBtn.classList.toggle("act");

  //without transition end version
  //   document.body.classList.toggle("active");
});

//transition end version
modeBtn.addEventListener("transitionend", () => {
  // modeBtn.classList.toggle("act");
  document.body.classList.toggle("active");
});
