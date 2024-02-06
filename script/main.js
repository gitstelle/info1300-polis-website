
// navigation
function toggleMenu() {
    var navigation = document.getElementById("hamburger");
    navigation.classList.toggle("active");
};

// gallery

document.addEventListener('DOMContentLoaded', function () {
  const slideshow = document.querySelector('.imgGallery');
  const slides = slideshow.querySelectorAll('figure');

  // const buttons = document.querySelector('.buttons')
  const prevButton = document.querySelector('#prevButton');
  const nextButton = document.querySelector('#nextButton');

  let currentSlide = 0;


  for (let i = 1; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  function showSlide(n) {
    slides[currentSlide].style.display = "none";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
  }
  function showNextSlide() {
    clearInterval(timer);
    showSlide(currentSlide + 1);
    timer = setInterval(showNextSlide, 4000);
  }

  function showPrevSlide() {
    clearInterval(timer);
    showSlide(currentSlide - 1);
    timer = setInterval(showNextSlide, 4000);
  }

  let timer = setInterval(showNextSlide, 4000);

  prevButton.addEventListener('click', showPrevSlide);
  nextButton.addEventListener('click', showNextSlide);

  showSlide(currentSlide);
});
