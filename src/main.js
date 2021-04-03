// Create variables targetting the relevant DOM elements here 👇
var coverImg = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
var descriptor1 = document.querySelector(".tagline-1");
var descriptor2 = document.querySelector(".tagline-2");
var form = document.querySelector(".form-view");
var mainCoverSection = document.querySelector(".main-cover");
var savedViewSection = document.querySelector(".saved-view");
var savedSectionGrid = document.querySelector(".saved-covers-section");
//buttons
var ownCoverButton = document.querySelector(".make-new-button");
var randomButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var homeButton = document.querySelector(".home-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var makeBookButton = document.querySelector(".create-new-book-button");

//form inputs
var coverField = document.querySelector(".user-cover");
var titleField = document.querySelector(".user-title");
var desc1Field = document.querySelector(".user-desc1");
var desc2Field = document.querySelector(".user-desc2");

// We've provided a few variables below
var savedCovers = [
  // new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = {};


// Add your event listeners here 👇
window.addEventListener("load", randomBook);
randomButton.addEventListener("click", randomBook);
ownCoverButton.addEventListener("click", formVisibility);
viewSavedButton.addEventListener("click", savedVisibility);
homeButton.addEventListener("click", homeVisibility);
makeBookButton.addEventListener("click", createNewBook);
saveCoverButton.addEventListener("click", addToSavedCovers);
// Create your event handlers and other functions here 👇

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomBook() {
  coverImg.src = covers[getRandomIndex(covers)];
  title.innerText = titles[getRandomIndex(titles)];
  descriptor1.innerText = descriptors[getRandomIndex(descriptors)];
  descriptor2.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(coverImg.src, title.innerText, descriptor1.innerText, descriptor2.innerText);
}

function pageButtonsMain() {
  mainCoverSection.classList.add("hidden");
  randomButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
  saveCoverButton.classList.add("hidden");
}

function hideForm(){
  form.classList.add("hidden");
}

function formVisibility() {
  pageButtonsMain();
  form.classList.remove("hidden");
}

function savedPosterGridView(){
  savedSectionGrid.innerHTML = "";
  for (var i = 0; i < savedCovers.length; i++) {
    savedSectionGrid.innerHTML += `
    <section class="mini-cover" id=${savedCovers[i].id}>
    <img class="cover-image" src="${savedCovers[i].cover}">
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline"> A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
    </section>
    `
  };
};

function savedVisibility() {
  pageButtonsMain();
  hideForm();
  savedViewSection.classList.remove("hidden");
  savedPosterGridView();
  }

function homeVisibility() {
  hideForm();
  mainCoverSection.classList.remove("hidden");
  savedViewSection.classList.add("hidden");
  homeButton.classList.add("hidden");
  randomButton.classList.remove("hidden");
  saveCoverButton.classList.remove("hidden");
}

function createNewBook(event) {
  event.preventDefault();
  homeVisibility();
  mainCoverSection.classList.remove("hidden");
  var coverValue = coverField.value;
  var titleValue = titleField.value;
  var desc1Value = desc1Field.value;
  var desc2Value = desc2Field.value;
  covers.push(coverValue);
  titles.push(titleValue);
  descriptors.push(desc1Value, desc2Value);
  currentCover = new Cover(coverValue, titleValue, desc1Value, desc2Value);
  coverImg.setAttribute("src", coverValue);
  title.innerText = titleValue;
  descriptor1.innerText = desc1Value;
  descriptor2.innerText = desc2Value;
}

  function addToSavedCovers(){
    if (!savedCovers.includes(currentCover)) {
      savedCovers.push(currentCover);
    }
  }
