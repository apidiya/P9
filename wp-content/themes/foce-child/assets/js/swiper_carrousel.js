
//console.log(" Message console pour vérifier que le JavaScript est fonctionnel ")
console.log("le script Swiper est lancé")

// Initialisation du Swiper
const swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabcursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    direction:'horizontal',

		coverflowEffect: {
		    rotate: 10,
		    stretch: 0,
		    depth: 50,
		    modifier: 1,
		    slideShadows: false,
		},
		
});
