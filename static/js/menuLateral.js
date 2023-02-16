let containerMenuAndContent = document.getElementsByClassName('containerMenuAndContent');
let containerMenuAndContentPrimeraSeccion = document.getElementsByClassName('containerMenuAndContent-primeraSeccion');
let botonFlotante1 = document.getElementById('botonFlotante1');
let botonFlotanteIcon1 = document.getElementById('botonFlotanteIcon1');

let menuState = "open";

botonFlotante1.addEventListener('click', () => {
    if(menuState == "open"){
        containerMenuAndContentPrimeraSeccion[0].classList.add('hideElement');
        containerMenuAndContent[0].classList.add('containerMenuAndContentClose');
        botonFlotanteIcon1.classList.remove('bi-x');
        botonFlotanteIcon1.classList.add('bi-list');
        menuState = "close";
    }else{
        containerMenuAndContentPrimeraSeccion[0].classList.remove('hideElement');
        containerMenuAndContent[0].classList.remove('containerMenuAndContentClose');
        botonFlotanteIcon1.classList.add('bi-x');
        botonFlotanteIcon1.classList.remove('bi-list');
        menuState = "open";
    }
});