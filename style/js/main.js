// calling images, next button, and prev button 
var slides = document.querySelector('.slider-items').children;
var nextSlide = document.getElementById("next");
var prevSlide = document.getElementById("prev");
// to know number of images to slide throw
var totalSlides = slides.length;
var index = 0;
// when clicking on the next and prev buttons
nextSlide.onclick = function () {
     go("next");
}
prevSlide.onclick = function () {
     go("prev");
}
// to get next slides or previous slides 
function go(direction) {
     if (direction == "next") {
          index++;
          if (index == totalSlides) {
               index = 0;
          }
     }
     else {
          if (index == 0) {
               index = totalSlides - 1;
          } else {
               index--;
          }
     }
     for (i = 0; i < totalSlides; i++) {
          slides[i].classList.remove("active");
     }
     slides[index].classList.add("active");
}