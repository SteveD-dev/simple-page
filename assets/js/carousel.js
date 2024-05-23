// scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
  const carouselInner = document.querySelector('.carousel-inner');
  const carouselItems = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;
  const totalItems = carouselItems.length;

  const moveToNextSlide = () => {
      // Remove 'active' class from current item
      carouselItems[currentIndex].classList.remove('active');
      // Update currentIndex to next item
      currentIndex = (currentIndex + 1) % totalItems;
      // Add 'active' class to next item
      carouselItems[currentIndex].classList.add('active');
      // Update the transform to show the next item
      carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  // Automatically move to the next slide every 2 seconds
  setInterval(moveToNextSlide, 3000);
});
