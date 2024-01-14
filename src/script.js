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

  document.getElementById("Icons").addEventListener("click", function () {
    document.getElementById("Icons").addEventListener("click", function () {
      var menu = document.getElementById("menu-escriptori");
      menu.classList.toggle("show");
    });
  });
  document.getElementById("menu-icon").addEventListener("click", function () {
    document.getElementById("Icons").addEventListener("click", function () {
      var menu = document.getElementById("menu-escriptori");
      menu.classList.toggle("show");
    });
  });
});
