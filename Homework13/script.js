let images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

// Випадковим чином вибрати одне зображення
let randomIndex = Math.floor(Math.random() * images.length);
let randomImage = images[randomIndex];

// Створити HTML-елемент img та встановити йому властивість src
let img = document.createElement('img');
img.src = 'images/' + randomImage;

// Додати створений HTML-елемент до документу
document.body.appendChild(img);