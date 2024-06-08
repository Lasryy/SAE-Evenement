// Sélection des éléments du carrousel
const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');

// Définition de l'index de l'image actuelle
let currentIndex = 0;

// Fonction pour afficher l'image suivante
function nextImage() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
}

// Fonction pour afficher l'image précédente
function prevImage() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
}

// Fonction pour mettre à jour le carrousel
function updateCarousel() {
  carouselItems.forEach((item, index) => {
    item.style.display = index === currentIndex? 'block' : 'none';
  });
}

// Événements pour les flèches de navigation
carouselPrev.addEventListener('click', prevImage);
carouselNext.addEventListener('click', nextImage);

// Initialisation du carrousel
updateCarousel();
