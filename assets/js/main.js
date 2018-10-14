window.onload = function () {

    /* mobile menu */
    let toggleMenu = document.getElementsByClassName('toggle-menu');
    toggleMenu[0].addEventListener('click', changeState);

    function changeState() {
        let menuItems = document.getElementsByClassName('menu-items-container');
        menuItems[0].classList.toggle('active-nav');
    }

    /* sticky nav */
    window.addEventListener('scroll',function() {
        let header = document.querySelector('[data-nav="container"]'); 

        if(this.scrollY >= 60) {
            header.classList.add('fixed-header');
        } else {
            header.classList.remove('fixed-header');
        }
    });








































}