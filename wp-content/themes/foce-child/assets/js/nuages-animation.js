// console.log(" le script nuages-animations.js est lancé")

// window.addEventListener('scroll', function() {
//     const scrolledY = window.scrollY;
//     const nuage = document.getElementById('NuagesBleu');
//     const limite = 300; // Le déplacement maximum en pixels
    
//     // Calculer la transformation basée sur le défilement
//     const transformValue = Math.min(scrolledY, limite);
  
//     // Appliquer la transformation
//     nuage.style.transform = 'translateX(' + (-transformValue) + 'px)';
//   });

// document.addEventListener('DOMContentLoaded', function() {
//     function nuage() {
//         const limite = 300;
//         const h3 = document.querySelector("#place h3")
//         const nuage = document.getElementById('NuagesBleu');
//         const windowHeight = window.innerHeight;
//         const elementTop = h3.getBoundingClientRect().top;
//         const scrolledY = window.scrollY;

//         if (elementTop < windowHeight) {
//             console.log (scrolledY)
//             // nuage.style.transform = 'translateX(' + (-transformValue) + 'px)';
//         } 
//         else {
//             // nuage.classList.remove('active');
//         }
        
//     }

//     window.addEventListener('load', nuage); // Déclencher au chargement de la page
//     window.addEventListener('scroll', nuage); // Déclencher à chaque défilement
// });


// document.addEventListener('DOMContentLoaded', function() {
//     function nuage() {
//         const limite = 300;
//         const h3 = document.querySelector("#place h3");
//         const nuage = document.getElementById('NuagesBleu');
//         const windowHeight = window.innerHeight;
//         const elementTop = h3.getBoundingClientRect().top;
//         const scrolledY = window.scrollY;

//         // Calculez la valeur de la transformation basée sur le défilement
//         let transformValue = scrolledY - elementTop + windowHeight - limite;

//         // Assurez-vous que la transformation ne s'applique que lorsque h3 est dans la vue et que le défilement est suffisant
//         if (elementTop < windowHeight && scrolledY + windowHeight > h3.offsetTop) {
//             nuage.style.transform = 'translateX(' + (-Math.min(transformValue, limite)) + 'px)';
//             // nuage.classList.add('active'); // Assurez-vous que cette classe existe et fait ce que vous voulez
//         } else {
//             nuage.style.transform = 'translateX(0px)';
//             // nuage.classList.remove('active');
//         }
        
//     }

//     window.addEventListener('load', nuage); // Déclencher au chargement de la page
//     window.addEventListener('scroll', nuage); // Déclencher à chaque défilement
// });


// document.addEventListener('DOMContentLoaded', function() {
//     function nuage() {
//         const limite = 300; // Distance maximale de déplacement
//         const h3 = document.querySelector("#place h3");
//         const nuage = document.getElementById('NuagesBleu');
//         const windowHeight = window.innerHeight;
//         const h3Top = h3.getBoundingClientRect().top;
//         const h3Visible = h3Top - windowHeight < 0;

//         // Le nuage bougera seulement si h3 est visible à l'écran
//         if (h3Visible) {
//             console.log ("nuageok")
//             // Calculer la distance de déplacement basée sur la position de scroll
//             let distance = Math.max(0, limite - Math.abs(h3Top));
//             console.log (distance) 

//             // La distance ne peut dépasser la limite
//             distance = Math.min(distance, limite);

//             // Appliquer la transformation au nuage
//             nuage.style.transform = `translateX(${-distance}px)`;
//         }
//     }

//     window.addEventListener('load', nuage); // Déclencher au chargement de la page
//     window.addEventListener('scroll', nuage); // Déclencher à chaque défilement
// });


document.addEventListener('DOMContentLoaded', function() {
    function nuage() {
        const limite = 300; // La distance maximale que le nuage va se déplacer.
        const h3 = document.querySelector("#place h3");
        const nuage = document.getElementById('NuagesBleu');
        const windowHeight = window.innerHeight;
        const elementBottom = h3.getBoundingClientRect().bottom;

        // Vérifie si le bas de l'élément `h3` est dans la fenêtre
        if (elementBottom > 0 && elementBottom <= windowHeight) {
            // Le bas de `h3` est visible dans la fenêtre
            const visibleRatio = (windowHeight - elementBottom) / windowHeight;
            const accelerationFactor = 2; // Ajustez ce facteur pour accélérer le mouvement
            const distance = Math.min(limite, limite * visibleRatio * accelerationFactor);
            nuage.style.transform = `translateX(${-distance}px)`;
        }
    }

    window.addEventListener('load', nuage); // Déclencher au chargement de la page
    window.addEventListener('scroll', nuage); // Déclencher à chaque défilement
});
