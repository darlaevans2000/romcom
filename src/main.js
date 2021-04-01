// Create variables targetting the relevant DOM elements here 👇
var coverImg = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
var descriptor1 = document.querySelector(".tagline-1");
var descriptor2 = document.querySelector(".tagline-2");
var randomButton = document.querySelector(".random-cover-button");


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = {};



// Add your event listeners here 👇
window.addEventListener("load", randomBook);
randomButton.addEventListener("click", randomBook);

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomBook() {
  coverImg.src = covers[getRandomIndex(covers)];
  title.innerText = titles[getRandomIndex(titles)];
  descriptor1.innerText = descriptors[getRandomIndex(descriptors)];
  descriptor2.innerText = descriptors[getRandomIndex(descriptors)];

  // updateCoverImg.src = randomCoverImage;
  // updateTitle.innerText = randomTitle;
  //  updateDescriptor1.innerText = randomDesc1;
  // updateDescriptor2.innerText = randomDesc2;
  currentCover = new Cover(coverImg.src, title.innerText, descriptor1.innerText, descriptor2.innerText);
}
