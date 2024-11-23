let currentImageIndex = 0;
const images = [
    'descarga1.jpg',
    'descarga3.jpg',
    'descarga5.jpg'
];

let currentImageIndex1 = 0;
const images1 = [
    'marketing.jpg',
    'marketin2.jpg',
    'marketing2.jpg'
    
];

let currentImageIndex2 = 0;
const images2 = [
    'alianza.jpg',
    'alianza1.jpg',
    'alianza2.jpg'
];

// Función para el primer carrusel
function changeImage1() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('img-info').src = images[currentImageIndex];
}

// Función para el segundo carrusel
function changeImage2() {
    currentImageIndex1 = (currentImageIndex1 + 1) % images1.length;
    document.getElementById('img-promocion').src = images1[currentImageIndex1];
}

// Función para el tercer carrusel
function changeImage3() {
    currentImageIndex2 = (currentImageIndex2 + 1) % images2.length;
    document.getElementById('img-alianzas').src = images2[currentImageIndex2];
}

// Cambiar las imágenes cada 5 segundos
setInterval(changeImage1, 5000);
setInterval(changeImage2, 5000);
setInterval(changeImage3, 5000);

// Cargar la primera imagen al inicio
document.addEventListener('DOMContentLoaded', () => {
    // Mostrar la primera imagen para cada carrusel
    document.getElementById('img-info').src = images[0];
    document.getElementById('img-promocion').src = images1[0];
    document.getElementById('img-alianzas').src = images2[0];
});
