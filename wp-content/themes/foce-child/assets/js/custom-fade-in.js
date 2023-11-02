document.addEventListener('DOMContentLoaded', function() {
    function checkVisibility() {
        var elements = document.querySelectorAll('.fade-in');
        var windowHeight = window.innerHeight;

        elements.forEach(function(element) {
            var elementTop = element.getBoundingClientRect().top;

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

// parrralaxe
window.addEventListener('scroll', function() {
    var parallaxImage = document.querySelector('.parralax');
    var scrollPosition = window.scrollY;

    // Ajustez la valeur 0.5 selon l'effet de parallaxe souhaité.
    // Une valeur plus élevée accélérera l'effet de parallaxe, une valeur plus faible le ralentira.
    var parallaxValue = scrollPosition * 0.3;

    parallaxImage.style.transform = 'translateY(' + parallaxValue + 'px)';
});

