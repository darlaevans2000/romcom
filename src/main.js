// Create variables targetting the relevant DOM elements here 👇
var updateCoverImg = document.querySelector(".cover-image");
var updateTitle = document.querySelector(".cover-title");
var updateDescriptor1 = document.querySelector(".tagline-1");
var updateDescriptor2 = document.querySelector(".tagline-2");


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener("load", randomBook);

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomBook() {
  var randomCoverImage = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomDesc1 = descriptors[getRandomIndex(descriptors)];
  var randomDesc2 = descriptors[getRandomIndex(descriptors)];

  updateCoverImg.src = randomCoverImage;
  updateTitle.innerText = randomTitle;
  updateDescriptor1.innerText = randomDesc1;
  updateDescriptor2.innerText = randomDesc2;
}
