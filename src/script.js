document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const menuMovil = document.getElementById("submenu-movil");
  const searchIcon = document.getElementById("search-icon");
  const closeSearch = document.getElementById("tancar-cerca");

  menuIcon.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
      menuMovil.style.display =
        menuMovil.style.display === "block" ? "none" : "block";
    }
  });

  searchIcon.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
      menuMovil.style.display = "block";
    }
  });

  closeSearch.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
      menuMovil.style.display = "none";
    }
  });
});
