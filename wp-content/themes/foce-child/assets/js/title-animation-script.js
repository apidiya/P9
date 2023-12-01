// animation des titres sur la page d'accueil au scroll en 2 temps

console.log(" le script title-animation-script.js est lancé ")

//premiere partie du titre
   const observer = new IntersectionObserver(entries => {
    // parcourt chaque élément observé
    entries.forEach(entry => {
      // si l'élément est visible
      if (entry.isIntersecting) {
        // ajouter classe 
        entry.target.classList.add("animateTitle");
      }
        else {
          // supprimer  classe 
        entry.target.classList.remove("animateTitle");
        }
    });
  });

  const sections = document.querySelectorAll(".Animetitre")
    sections.forEach(section => {
    observer.observe(section);
  });

  
//deuxieme partie du titre
  const observer2 = new IntersectionObserver(entries => {
 
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animateTitle2");
      }
        else {
        entry.target.classList.remove("animateTitle2");
        }
    });
  });

  const sections2 = document.querySelectorAll(".Animetitre2")
    sections2.forEach(section => {
    observer2.observe(section);  
  });
