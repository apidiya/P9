// animation des nuages sur la page d'accueil au scroll
console.log(" le script nuages-animations.js est lancé")

document.addEventListener("DOMContentLoaded", function() {
    var nuagesBleu = document.getElementById("NuagesBleu");
    var sectionTitle = document.querySelector(".story #place h3");
  
    window.addEventListener("scroll", function() {
      var boundingBox = sectionTitle.getBoundingClientRect();
  
      // Vérifier si le titre h3 est visible
      if (boundingBox.top < window.innerHeight && boundingBox.bottom >= 0) {
        // Calculer la translation en fonction du défilement
        var scrollPercentage = boundingBox.bottom / window.innerHeight;
        var maxTranslation = 300;
        var translation = maxTranslation * (1 - scrollPercentage);
  
        // Limiter la translation à 300px au maximum
        translation = Math.min(maxTranslation, translation);
  
        // Appliquer la translation à #NuagesBleu
        nuagesBleu.style.transform = "translateX(-" + translation + "px)";
      } 
      else {
        // Si le titre n'est pas visible, revenir à la position initiale
        nuagesBleu.style.transform = "translateX(0)";
      }
    });
  });
