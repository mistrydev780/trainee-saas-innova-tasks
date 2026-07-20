let images = [
    "images/img1.jpg",

    "images/img2.jpg",

    "images/img3.jpg",

    "images/img4.jpg",

    "images/img5.jpg"
];

let currentIndex = 0;

let image = document.getElementById("image");


function showImage() {

    image.src = images[currentIndex];

}

showImage();

document.getElementById("next").addEventListener("click", function () {

    currentIndex++;

    if (currentIndex >= images.length) {

        currentIndex = 0;

    }

    showImage();

});

document.getElementById("prev").addEventListener("click", function () {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = images.length - 1;

    }

    showImage();

});

setInterval(function () {

    currentIndex++;

    if (currentIndex >= images.length) {

        currentIndex = 0;
    }
    showImage();

}, 3000);