document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const menuMovil = document.getElementById("submenu-movil");
  const closeSearch = document.getElementById("tancar-cerca");
  const espaiSociLink = document.getElementById("espai-soci-link");
  const submenuEscriptori = document.getElementById("submenu-escriptori");

  menuIcon.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
      menuMovil.style.display =
        menuMovil.style.display === "block" ? "none" : "block";
    }
  });

  closeSearch.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
      menuMovil.style.display = "none";
    }
  });

  espaiSociLink.addEventListener("click", function (event) {
    event.preventDefault();
    submenuEscriptori.style.display =
      submenuEscriptori.style.display === "block" ? "none" : "block";
  });

  
  document.getElementById("menu-icon").addEventListener("click", function () {
    document.getElementById("Icons").addEventListener("click", function () {
      var menu = document.getElementById("menu-escriptori");
      menu.classList.toggle("show");
    });
  });

  document.getElementById('search-icon').addEventListener('click', function() {
    var input = document.getElementById('search-input');
    if (input.style.display === 'none') {
        input.style.display = 'block';
        input.style.width = '10rem'; /* Ajusta esto para controlar el ancho del input */

    } else {
        input.style.width = '0';
        setTimeout(function() {
            input.style.display = 'none';
        }, 500); /* Asegúrate de que este valor coincida con la duración de la transición en tu CSS */
    }
});
});
