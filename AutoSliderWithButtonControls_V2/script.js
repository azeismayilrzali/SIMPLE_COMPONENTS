let imgList = ["first.jpg", "second.jpg", "third.jpg"];

const SliderImg = document.getElementById("sliderimg");

const NextBtn = document.querySelector("#nextbtn");
const PrevBtn = document.querySelector("#prevbtn");

const test1 = document.querySelectorAll(".slider img");

const test2 = document.getElementById("sliderimg");

let counter = 0;

SliderImg.src = "assets/" + imgList[counter];

NextBtn.addEventListener("click", (int1) => {
  counter = counter + 1;
  // SliderImg.style.animation = "remove 0.1s";
  if (counter == imgList.length) {
    counter = 0;
  }
  SliderImg.style.opacity = 0;
  setTimeout(() => {
    SliderImg.src = "assets/" + imgList[counter];
    SliderImg.style.opacity = 1;
  }, 2000);

  // SliderImg.style.animation = "fadein 1.4s ease-out";
});

PrevBtn.addEventListener("click", (int1) => {
  counter = counter - 1;
  if (counter < 0) {
    counter = imgList.length - 1;
  }
  SliderImg.style.opacity = 0;
  setTimeout(() => {
    SliderImg.src = "assets/" + imgList[counter];
    SliderImg.style.opacity = 1;
  }, 2000);

  // SliderImg.style.animation = "fadein 1.4s ease-out";
});

var x = 0;
function changeImg() {
  document.getElementById("sliderimg").src = "assets/" + imgList[x];
  if (x === imgList.length - 1) {
    x = 0;
  } else {
    x++;
  }
}

let slider = setInterval(function () {
  changeImg();
}, 2000);
