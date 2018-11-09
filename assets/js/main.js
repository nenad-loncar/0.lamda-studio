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

    function slideTestmonial() {
        if (testNumerator == 1) {

            testmonialCardArray[0].style.transform = "translateX(-170%)";
            testmonialCardArray[0].style.zIndex = "0";
            testmonialCardArray[1].style.transform = "translateX(-50%)";
            testmonialCardArray[1].style.zIndex = "2";
            testmonialCardArray[2].style.transform = "translateX(70%)";
            testmonialCardArray[2].style.zIndex = "1";

            dots[1].classList.add('active');
            dots[0].classList.remove('active');
            testNumerator++;
        } else if (testNumerator == 2) {

            testmonialCardArray[2].style.transform = "translateX(-170%)";
            testmonialCardArray[2].style.zIndex = "0";
            testmonialCardArray[0].style.transform = "translateX(-50%)";
            testmonialCardArray[0].style.zIndex = "2";
            testmonialCardArray[1].style.transform = "translateX(70%)";
            testmonialCardArray[1].style.zIndex = "1";

            dots[2].classList.add('active');
            dots[1].classList.remove('active');
            testNumerator++;
        } else if (testNumerator == 3) {

            testmonialCardArray[1].style.transform = "translateX(-170%)";
            testmonialCardArray[1].style.zIndex = "0";
            testmonialCardArray[2].style.transform = "translateX(-50%)";
            testmonialCardArray[2].style.zIndex = "2";
            testmonialCardArray[0].style.transform = "translateX(70%)";
            testmonialCardArray[0].style.zIndex = "1";
            testNumerator++;
            dots[0].classList.add('active');
            dots[2].classList.remove('active');

        } else {
            testNumerator = 1;
        }
    }

    setInterval(slideTestmonial, 2000);


    /* valdiation form */
    let formBtn = document.querySelectorAll('input'),
        elments = document.querySelectorAll('[data-element]');


    formBtn.forEach((e) => {
        e.addEventListener("click", function () {
            switch (e.id) {
                case "submit":
                    validateForm();
                    break;
                case "reset":
                    formReset();
                    break;
            }
        })
    })


    function validateForm() {
        let emptyFilds = [];
        elments.forEach((e) => {
            if (e.value == "") {
                emptyFilds.push(e);
            }
        })

        if (emptyFilds.length > 0 && emptyFilds.length <= 3) {
            alert("PLEASE FILL ALL FIELDS");
        } else {
            alert("MESSAGE SENT");
        }
    }

    function formReset() {
        elments.forEach((e) => {
            e.value = "";
        })
    }



}