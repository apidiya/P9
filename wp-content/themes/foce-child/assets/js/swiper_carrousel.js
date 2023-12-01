// carrousel swiper pour les personnages
console.log("le script Swiper est lancé")

// Initialisation du Swiper
const swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabcursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    direction:'horizontal',
	loop: true,

coverflowEffect: {
	rotate: 55,
	stretch: 0,
	depth: 100,
	modifier: 1,
	slideShadows: false,
	},		
});
