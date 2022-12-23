const iconoArrow = document.querySelector('.icono__arrow');
const iconoArrowDark = document.querySelector('.icono__arrow__dark');
const none = document.querySelector('.container__none');

if (window.matchMedia("(min-width: 375px) and (max-width: 1439px)").matches) {
    iconoArrow.addEventListener('click', mostrar);
    function mostrar() {
        none.classList.add('mostrar');
    }

    iconoArrowDark.addEventListener('click', noMostrar);
    function noMostrar() {
        none.classList.remove('mostrar');
    }
}

if (window.matchMedia("(min-width: 1440px)").matches) {
    iconoArrow.addEventListener('click', mostrar);
    function mostrar() {
        none.classList.toggle('mostrar');
        if (none.classList.contains('mostrar')) {
            iconoArrow.classList.add('icono__desktop');
        } else {
            iconoArrow.classList.remove('icono__desktop');
        }
    }
}