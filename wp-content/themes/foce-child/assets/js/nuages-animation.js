console.log(" le script nuages-animations.js est lancé")

document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour déplacer les nuages au scroll
    function scrollNuage() {
        const scrollY = window.scrollY;
        const NuagesBleu = document.getElementById('NuagesBleu');

        // Parametre pour régler les préférences (Position nuage et Vitesse de déplacement)
        const NuagesBleuVitesse = 0.3;
        const NuagesBleuPosition = 300;

        // Nouvelles positions nuage en fonction du défilement
        const NuagesBleuX = -scrollY * NuagesBleuVitesse + NuagesBleuPosition;
        NuagesBleu.style.transform = `translateX(${NuagesBleuX}px)`;
    }

    window.addEventListener('load', scrollNuage); // Déclencher au chargement de la page
    window.addEventListener('scroll', scrollNuage); // Déclencher à chaque défilement
});