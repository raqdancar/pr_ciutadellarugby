document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const searchBar = document.getElementById('menu-movil');
    const searchIcon = document.getElementById('search-icon');
    const closeSearch = document.getElementById('close-search');
  
    menuIcon.addEventListener('click', function () {
      searchBar.style.display = (searchBar.style.display === 'block') ? 'none' : 'block';
    });
  
    searchIcon.addEventListener('click', function () {
      searchBar.style.display = 'block';
    });
  
    closeSearch.addEventListener('click', function () {
      searchBar.style.display = 'none';
    });
  });
  