let currentImageIndex = 0;
const images = ["1.jpg", "2.jpg", "3.jpg"];

function nextImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = images.length - 1;
    const nextButton = document.getElementById('nextButton');
    if (nextButton) {
      nextButton.style.display = 'none';
    }
  }
  const image = document.getElementById('image');
  if (image) {
    image.src = images[currentImageIndex];
  }
  const prevButton = document.getElementById('prevButton');
  if (prevButton) {
    prevButton.style.display = 'block';
  }
}

function prevImage() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = 0;
    const prevButton = document.getElementById('prevButton');
    if (prevButton) {
      prevButton.style.display = 'none';
    }
  }
  const image = document.getElementById('image');
  if (image) {
    image.src = images[currentImageIndex];
  }
  const nextButton = document.getElementById('nextButton');
  if (nextButton) {
    nextButton.style.display = 'block';
  }
}
