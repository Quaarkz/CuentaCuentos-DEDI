const carouselInner = document.querySelector('.carousel-inner');
let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % document.querySelectorAll('.card').length;
  updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + document.querySelectorAll('.card').length) % document.querySelectorAll('.card').length;
  updateCarousel();
});

function updateCarousel() {
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}