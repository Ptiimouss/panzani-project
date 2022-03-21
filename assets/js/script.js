const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scroll);

function scroll() {
  if (window.pageYOffset > 300) { // Montrer Bouton
    if(!backToTopButton.classList.contains("btnEntree")) {
      backToTopButton.classList.remove("btnSortie");
      backToTopButton.classList.add("btnEntree");
      backToTopButton.style.display = "block";
    }
  }
  else { // Cacher Bouton
    if(backToTopButton.classList.contains("btnEntree")) {
      backToTopButton.classList.remove("btnEntree");
      backToTopButton.classList.add("btnSortie");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 300);
    }
  }
}

backToTopButton.addEventListener("click", backtotop);

function backtotop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}