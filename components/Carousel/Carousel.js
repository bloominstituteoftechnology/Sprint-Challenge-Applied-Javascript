


const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector('.slider__item:first-of-type');
const lastChild = document.querySelector('.slider__item:last-of-type');

// btn
const next = document.querySelector('.right-button');
const previous = document.querySelector('.left-button')
function slide() {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`)
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
    } else {
      firstSlide.classList.add(SHOWING_CLASS);
    }
  } else {

    firstSlide.classList.add('showing');
  }
  console.log('testing')
}

slide();

next.addEventListener('click', () => {
  slide();
  console.log('clicked next')
})
previous.addEventListener('click', () => {

  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`)
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    const prevSlide = currentSlide.previousElementSibling;
    if (prevSlide) {
      prevSlide.classList.add(SHOWING_CLASS);
    } else {
      lastChild.classList.add(SHOWING_CLASS);
    }
  } else {
    firstSlide.classList.add('showing');
  }
  console.log('left clicked')

})


setInterval(slide, 4000);

