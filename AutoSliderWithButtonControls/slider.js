let photos = [
    "https://cdn.shopify.com/s/files/1/0145/5613/5478/products/product-v1-img2.jpg?v=1565778143",
    "https://cdn.shopify.com/s/files/1/0145/5613/5478/products/product-1.jpg?v=1569556553",
    "https://cdn.shopify.com/s/files/1/0145/5613/5478/products/product-v1-img4.jpg?v=1565778217"
]

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");


let slide = document.getElementById("slide");

let i = 0;

slide.src = photos[i];

function next() {
    i++;

    if (i > photos.length - 1) {
        i = 0;
    }

    slide.src = photos[i];
}


function previous() {
    i--;

    if (i < 0) {
        i = photos.length - 1;
    }

    slide.src = photos[i];
}


let interval = setInterval(next, 1500);


btn1.addEventListener("click", function stop() {
    clearInterval(interval)
})

btn2.addEventListener("click", function stop() {
    clearInterval(interval)
})