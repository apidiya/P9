// script pour faire apparaitre les éléments au scroll ave cun effet fade-in

document.addEventListener('DOMContentLoaded', function() {
    function checkVisibility() {
        const elements = document.querySelectorAll('.fade-in');
        const windowHeight = window.innerHeight;

        elements.forEach(function(element) {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }

    window.addEventListener('load', checkVisibility); // Déclencher au chargement de la page
    window.addEventListener('scroll', checkVisibility); // Déclencher à chaque défilement
});

// parallaxe
window.addEventListener('scroll', function() {
    const parallaxImage = document.querySelector('.parralax');
    const scrollPosition = window.scrollY;

    // Ajustez la valeur 0.25 selon l'effet de parallaxe souhaité.
    // Une valeur plus élevée accélérera l'effet de parallaxe, une valeur plus faible le ralentira.
    const parallaxValue = scrollPosition * 0.25;
    parallaxImage.style.transform = 'translateY(' + parallaxValue + 'px)';
});