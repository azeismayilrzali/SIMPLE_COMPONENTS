let imgContainer = document.getElementById("img-container");

let activeImg = document.getElementsByClassName("sliderImg");
// let n = 0;
// let img = activeImg[2];
console.log(activeImg);
// activeImg = activeImg[0];
let n = -100;
document.getElementById("next-button").addEventListener("click", function () {
  //   if (n == imgContainer.children.length - 1) {
  //     img = activeImg[n];
  //     passiveImg = activeImg[0];
  //     n = 0;
  //     img.classList.remove("active");
  //     passiveImg.classList.add("active");
  //   } else {
  //     img = activeImg[n];
  //     passiveImg = activeImg[n + 1];
  //     img.classList.remove("active");
  //     passiveImg.classList.add("active");
  //     n++;
  //   }

  //   console.log(activeImg);
  //   console.log(passiveImg + "salam");
  str = "translateX(" + n + "%)";
  console.log(str);
  activeImg[0].style.transform = str;
  console.log(activeImg[0].style.transform);
  activeImg[1].style.transform = str;
  console.log(activeImg[1].style.transform);
  activeImg[2].style.transform = str;
  n = n - 100;

  if (n == -300) {
    n = 0;
  }
  //   let passive = activeImg.nextElementSibling;
});

// transform:translateX(100%);
