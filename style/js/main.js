// calling images, next button, and prev button 
let sliders = document.querySelectorAll('.slider');

function slide(slider) {
     let nextSlide = slider.querySelector('.next');
     let prevSlide = slider.querySelector('.prev');
     let slides = slider.querySelector('.slider-items').children;
     // to know number of images to slide throw
     let totalSlides = slides.length;
     let index = 0;
     // when clicking on the next and prev buttons
     nextSlide.onclick =  () => {
          go("next");
     }
     prevSlide.onclick =  () => {
          go("prev");
     }
     // to get next slides or previous slides 
      const go = (direction) => {
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
}
for (let slider of sliders) {
     slide(slider);
}


