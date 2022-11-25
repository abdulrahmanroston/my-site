


let mainToggelMenu = document.getElementById('toggel-hedaer-menu') ;
let headerMenu = document.getElementById('header-menu') ;
let closeContainer = document.getElementById('close-container') ;

mainToggelMenu.addEventListener('click', () => {
    headerMenu.classList.add('menu-mobile') ;
    
}) ;

closeContainer.addEventListener('click', () => {
    headerMenu.classList.remove('menu-mobile') ;
}) ;