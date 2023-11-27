const sliderImages = document.querySelector('.slider-images');
    const sliderImageWidth = document.querySelector('.slider-image').offsetWidth;
    let slideIndex = 0;
  
    function slideToIndex(index) {
      const position = -index * sliderImageWidth;
      sliderImages.style.transform = `translateX(${position}px)`;
    }
  
    function nextSlide() {
      slideIndex = (slideIndex + 1) % 4;
      slideToIndex(slideIndex);
    }
  
    setInterval(nextSlide, 3000);