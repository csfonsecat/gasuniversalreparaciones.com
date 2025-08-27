document.addEventListener('DOMContentLoaded', function() {
  const sliderImages = document.querySelector('.slider-images');
  const images = document.querySelectorAll('.slider-images img');
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');
  let index = 0;
  let autoSlide;

  function showImage(idx) {
    sliderImages.style.transform = `translateX(-${idx * 100}%)`;
  }

  function nextImage() {
    index = (index < images.length - 1) ? index + 1 : 0;
    showImage(index);
  }

  function prevImage() {
    index = (index > 0) ? index - 1 : images.length - 1;
    showImage(index);
  }

  prevBtn.addEventListener('click', function() {
    prevImage();
    resetAutoSlide();
  });

  nextBtn.addEventListener('click', function() {
    nextImage();
    resetAutoSlide();
  });

  function startAutoSlide() {
    autoSlide = setInterval(nextImage, 2000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  showImage(index);
  startAutoSlide();
});