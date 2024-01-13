document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menuMovil = document.getElementById('menu-movil');
    const searchIcon = document.getElementById('search-icon');
    const closeSearch = document.getElementById('close-search');
  
    menuIcon.addEventListener('click', function () {
      menuMovil.style.display = (menuMovil.style.display === 'block') ? 'none' : 'block';
    });
  
    searchIcon.addEventListener('click', function () {
      menuMovil.style.display = 'block';
    });
  
    closeSearch.addEventListener('click', function () {
      menuMovil.style.display = 'none';
    });
  });
  