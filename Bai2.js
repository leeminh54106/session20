let images = [
    "/Baitap/img/banner02.webp",
    "/Baitap/img/banner07.webp",
    "/Baitap/img/sdch_top-banner_desktop-08.05.webp"
];
let currentIndex = 0;

let imageElement = document.getElementById("image");
let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");

function showImage(index) {
    imageElement.src = images[index];
}

function showNextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

function showPreviousImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
}

function autoChangeImage() {
    setInterval(showNextImage, 3000); // Thay đổi ảnh sau mỗi 30 giây
}

prevButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);
showImage(currentIndex);
autoChangeImage();