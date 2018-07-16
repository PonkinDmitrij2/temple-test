const carouselButtons = document.querySelectorAll('.carousel__indicator');
const carouselButtonActive = document.getElementsByClassName('carousel__indicator--active');
const carouselItems = document.getElementsByClassName('carousel__item');

function carouselSwitch(event) {
  if (carouselButtonActive.length > 0 && carouselButtonActive[0] !== event.target) {
    carouselButtonActive[0].classList.remove('carousel__indicator--active');
  }
  event.target.classList.add('carousel__indicator--active');

  const dataBtn = event.target.getAttribute('data-btn');
  for (let i = 0; i < carouselItems.length; i++) {
    if (dataBtn == i) {
      carouselItems[i].classList.add('carousel__item--active');
    } else {
      carouselItems[i].classList.remove('carousel__item--active');
    }
  }
}

for (let i = 0; i < carouselButtons.length; i++) {
  carouselButtons[i].addEventListener('click', carouselSwitch);
}