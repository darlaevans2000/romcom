// DOM element targets QS
var coverImg = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
var descriptor1 = document.querySelector(".tagline-1");
var descriptor2 = document.querySelector(".tagline-2");
var form = document.querySelector(".form-view");
var mainCoverSection = document.querySelector(".main-cover");
var savedViewSection = document.querySelector(".saved-view");
var savedSectionGrid = document.querySelector(".saved-covers-section");
var savedCover = document.querySelector(".mini-cover");
// buttons QS
var coverFormBtn = document.querySelector(".make-new-button");
var randomBtn = document.querySelector(".random-cover-button");
var saveCoverBtn = document.querySelector(".save-cover-button");
var homeBtn = document.querySelector(".home-button");
var viewSavedCoversBtn = document.querySelector(".view-saved-button");
var createCoverBtn = document.querySelector(".create-new-book-button");
// form inputs QS
var coverField = document.querySelector(".user-cover");
var titleField = document.querySelector(".user-title");
var desc1Field = document.querySelector(".user-desc1");
var desc2Field = document.querySelector(".user-desc2");

var savedCovers = [
   new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = {};

//event listeners
window.onload = createRandomCover();
randomBtn.addEventListener("click", createRandomCover);
coverFormBtn.addEventListener("click", formView);
viewSavedCoversBtn.addEventListener("click", savedView);
homeBtn.addEventListener("click", homeView);
createCoverBtn.addEventListener("click", createNewCover);
saveCoverBtn.addEventListener("click", addToSavedCovers);
savedSectionGrid.addEventListener("dblclick", removeSavedCover);

//functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function createRandomCover() {
  coverImg.src = covers[getRandomIndex(covers)];
  title.innerText = titles[getRandomIndex(titles)];
  descriptor1.innerText = descriptors[getRandomIndex(descriptors)];
  descriptor2.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(coverImg.src, title.innerText, descriptor1.innerText, descriptor2.innerText);
};
//hidden.add.remove functions
function pageButtonsMain() {
  mainCoverSection.classList.add("hidden");
  randomBtn.classList.add("hidden");
  homeBtn.classList.remove("hidden");
  saveCoverBtn.classList.add("hidden");
};


function formView() {
  pageButtonsMain();
  form.classList.remove("hidden");
  savedViewSection.classList.add("hidden");
};

function savedView() {
  pageButtonsMain();
  form.classList.add("hidden");
  savedViewSection.classList.remove("hidden");
  savedCoverGridView();
};

function homeView() {
  form.classList.add("hidden");
  mainCoverSection.classList.remove("hidden");
  savedViewSection.classList.add("hidden");
  homeBtn.classList.add("hidden");
  randomBtn.classList.remove("hidden");
  saveCoverBtn.classList.remove("hidden");
};

function savedCoverGridView() {
  savedSectionGrid.innerHTML = "";
  for (var i = 0; i < savedCovers.length; i++) {
    savedSectionGrid.innerHTML += `
    <section class="mini-cover">
    <img class="mini-cover" id="${savedCovers[i].id}" src="${savedCovers[i].cover}">
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline"> A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
    </section>
    `
  }
};

function pushAndSetFieldValues() {
  covers.push(coverField.value);
  titles.push(titleField.value);
  descriptors.push(desc1Field.value, desc2Field.value);
  coverImg.setAttribute("src", coverField.value);
  title.innerText = titleField.value;
  descriptor1.innerText = desc1Field.value;
  descriptor2.innerText = desc2Field.value;
};

function createNewCover(event) {
  event.preventDefault();
  if (coverField.value && titleField.value && desc1Field.value && desc2Field.value) {
    homeView();
    pushAndSetFieldValues();
    currentCover = new Cover(coverField.value, titleField.value, desc1Field.value, desc2Field.value);
  } else {
    alert("Please fill out the full form");
    return
  }
};

function addToSavedCovers() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
};

function removeSavedCover(event) {
  var coverId = event.target.id;
  for (var i = 0; i < savedCovers.length; i++) {
      if (coverId === `${savedCovers[i].id}`){
        savedCovers.splice(i, 1);
      }
  }
  savedCoverGridView();
};
