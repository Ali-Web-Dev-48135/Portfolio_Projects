const prevBtn = document.getElementById("prevButton");
const nextBtn = document.getElementById("nextButton");
const imageHolder = document.querySelector(".main-main__div");
const mainHeader = document.querySelector(".main-header");

let currentImageIndex = 0;

const imageList = [
  `<img src="imageOne.jpg">`,
  `<img src="imageTwo.jpg">`,
  `<img src="imageThree.jpg">`,
];

const defaultImage = () => {
  imageHolder.innerHTML = imageList[currentImageIndex];
};

const nextImage = () => {
  if (currentImageIndex < imageList.length) {
    currentImageIndex += 1;
  }

  if (currentImageIndex >= imageList.length) {
    return;
  } else if (currentImageIndex < imageList.length) {
    imageHolder.innerHTML = `${imageList[currentImageIndex]}`;
  }
};

const prevImage = () => {
  if (currentImageIndex <= 0) {
    return;
  } else if (currentImageIndex > imageList.length) {
    return;
  } else if (currentImageIndex >= imageList.length) {
    currentImageIndex -= 1;
  }
  imageHolder.innerHTML = `${imageList[currentImageIndex - 1]}`;
  currentImageIndex -= 1;
};
// control the header opacity...
const controlOpacity = () => {
  if (document.documentElement.scrollTop >= 700) {
    mainHeader.classList.add("opacityReset");
  } else {
    mainHeader.classList.remove("opacityReset");
  }
};
document.addEventListener("scroll", controlOpacity);

defaultImage();
prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);
