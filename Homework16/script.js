let currentImageIndex = 0;
const images = ["1.jpg", "2.jpg", "3.jpg"];

function showCurrentImage() {
  const image = document.getElementById('image');
  if (image) {
    image.src = images[currentImageIndex];
  }

  const prevButton = document.getElementById('prevButton');
  if (prevButton) {
    if (currentImageIndex === 0) {
      prevButton.style.display = 'none';
    } else {
      prevButton.style.display = 'block';
    }
  }

  const nextButton = document.getElementById('nextButton');
  if (nextButton) {
    if (currentImageIndex === images.length - 1) {
      nextButton.style.display = 'none';
    } else {
      nextButton.style.display = 'block';
    }
  }
}

function nextImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = images.length - 1;
  }
  showCurrentImage();
  
  const prevButton = document.getElementById('prevButton');
  if (prevButton) {
    prevButton.style.display = 'block';
  }
  
  const nextButton = document.getElementById('nextButton');
  if (nextButton) {
    if (currentImageIndex === images.length - 1) {
      nextButton.style.display = 'none';
    }
  }
}

function prevImage() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = 0;
  }
  showCurrentImage();
  
  const nextButton = document.getElementById('nextButton');
  if (nextButton) {
    nextButton.style.display = 'block';
  }
  
  const prevButton = document.getElementById('prevButton');
  if (prevButton) {
    if (currentImageIndex === 0) {
      prevButton.style.display = 'none';
    }
  }
}

showCurrentImage();
