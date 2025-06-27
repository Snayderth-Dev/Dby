const showMoreBtn = document.getElementById("show-more-btn");
const showMoreText = document.getElementById("show-more");
const shadowContainer = document.querySelector(".shadow-container");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const song = document.getElementById("music");

showMoreBtn.addEventListener("click", () => {
  showMoreText.style.height = "320px";
  showMoreText.style.overflow = "auto";
  shadowContainer.style.display = "none";
  showMoreBtn.style.display = "none";
});

function playMusic() {
  if (song.paused) {
    song.play();
    pauseBtn.style.display = "block";
    playBtn.style.display = "none";
  }
}

function stopMusic() {
  song.pause();
  pauseBtn.style.display = "none";
  playBtn.style.display = "block";
}

playBtn.addEventListener("click", () => {
  playMusic();
});

pauseBtn.addEventListener("click", () => {
  stopMusic();
});
