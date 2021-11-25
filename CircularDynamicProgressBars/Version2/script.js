let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");
let input = document.getElementById("percent");
let progressValue = 0;
let speed = 50;

const submitBtn = document.getElementById("submit-button");

function percentChange() {
  console.log("salam");

  let progress = setInterval(() => {
    progressEndValue = document.getElementById("percent").value;
    if (progressEndValue > 100 || progressEndValue < 0) {
      progressEndValue = 0;
    }

    progressValue++;
    if (progressEndValue == 0) {
      valueContainer.textContent = `0%`;
      progressBar.style.background = `conic-gradient(
        #4d5bf9 ${0 * 3.6}deg,
        #cadcff ${0 * 3.6}deg
    )`;
      clearInterval(progress);
      progressValue = 0;
    } else {
      valueContainer.textContent = `${progressValue}%`;

      progressBar.style.background = `conic-gradient(
                      #4d5bf9 ${progressValue * 3.6}deg,
                      #cadcff ${progressValue * 3.6}deg
                  )`;
    }

    if (progressValue == progressEndValue) {
      clearInterval(progress);
      progressValue = 0;
    }
  }, speed);
}
