
//console.log(" Message dans la console, pour vérifier que le JavaScript est fonctionnel ")
console.log(" le script javascript lancé se nomme menu_burger.js et il est fonctionnel ")

//gestion ouverture menu
/*Ouverture menu*/

const boutonMenu = document.querySelector('.boutonMenu');
const     burger = document.querySelector('.MenuFull');

boutonMenu.addEventListener('click', () => {
burger.classList.toggle('nav_open');
boutonMenu.classList.toggle('active');
});

    
/*Fermeture menu sur click lien*/

const menuLinks = document.querySelectorAll('.MenuFull ul li a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('nav_open');
        boutonMenu.classList.remove('active');
    })});
            