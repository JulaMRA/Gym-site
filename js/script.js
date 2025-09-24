const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".class-item");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let index = 0;

function updateSlider() {
  track.style.transform = `translateX(-${index * 40}%)`; // przesuwamy o szerokość jednego slajdu
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
});


