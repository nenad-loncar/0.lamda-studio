window.onload = function () {

        /* mobile menu */
        let toggleMenu = document.getElementsByClassName('toggle-menu');
        toggleMenu[0].addEventListener('click', changeState);

        function changeState() {
            let menuItems = document.getElementsByClassName('menu-items-container');
            menuItems[0].classList.toggle('active-nav');
        }

        /* sticky nav */
        window.addEventListener('scroll', function () {
            let header = document.querySelector('[data-nav="container"]');

            if (this.scrollY >= 60) {
                header.classList.add('fixed-header');
            } else {
                header.classList.remove('fixed-header');
            }
        });

        /* team cards slide to left or right side */
        let cards = document.querySelectorAll('.card-container'), // select all cards
            cardsArray = Array.from(cards), // create cards array
            numerator = 1,
            arrowLeft = document.querySelector('.left'),
            arrowRight = document.querySelector('.right');


        arrowRight.addEventListener('click', slideRight);
        arrowLeft.addEventListener('click', slideLeft);


        function slideRight() {

            // set position for cards
            cardsArray.forEach((e) => {
                e.setAttribute('data-pos', numerator++);
                if (numerator >= cards.length) {
                    numerator = 0;
                }
            });

            // shift cards for one position to right
            let lastElement = cardsArray[cardsArray.length - 1];
            for (let i = cardsArray.length - 2; i >= 0; i--) {
                cardsArray[i + 1] = cardsArray[i];
            }
            cardsArray[0] = lastElement;

        }

        function slideLeft() {

            // set position for cards
            cardsArray.forEach((e) => {
                e.setAttribute('data-pos', numerator++);
                if (numerator >= cards.length) {
                    numerator = 0;
                }
            });

            // shift cards for one position to left
            let firstElement = cardsArray[0];
            for (let i = 1; i <= cardsArray.length - 1; i++) {
                cardsArray[i - 1] = cardsArray[i]
            }
            cardsArray[cardsArray.length - 1] = firstElement;

        }




/* testmonial slider */

let testmonialCards = document.querySelectorAll('.testmonials-card-container > div'),
dots = document.querySelectorAll('.indicators > span'),
testmonialCardArray = Array.from(testmonialCards),
dotsArray = Array.from(dots),
testNumerator = 1;
   
function slideTestmonial()  {

 

}



setInterval(slideTestmonial,1000);








}