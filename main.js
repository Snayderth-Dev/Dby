const year = document.getElementById("year");
const btn = document.getElementById("btn");
const btnSpecial = document.getElementById("special");
const buttonPrevious = document.getElementById("btn-previous");
const buttonNext = document.getElementById("btn-next");
const imageElement = document.querySelector(".carousel img");

year.textContent = new Date().getFullYear();
btn.addEventListener("click", () => {
  window.location.href = "#cards-section";
});
btnSpecial.addEventListener("click", () => {
  window.location.href = "notes.html";
});

/* CAROUSEL FUNCTION */

let currentIndex = 0;
const images = ["./img/deba-1.webp", "./img/deba-2.webp", "./img/deba-3.webp"];

function updateImage() {
  imageElement.src = images[currentIndex];
}

function handlePrevious() {
  if (currentIndex > 0) {
    currentIndex--;
    updateImage();
  }
}

function handleNext() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateImage();
  }
}

buttonPrevious.addEventListener("click", handlePrevious);
buttonNext.addEventListener("click", handleNext);

updateImage();
