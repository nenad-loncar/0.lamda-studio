window.onload = function () {
    /*Mobile Menu*/

    let toggleMenu = document.getElementsByClassName('toggle-menu');
    toggleMenu[0].addEventListener('click',changeState);

    function changeState() {
        let menuItems = document.getElementsByClassName('menu-items-container');
        menuItems[0].classList.toggle('active-nav');
    }









































}