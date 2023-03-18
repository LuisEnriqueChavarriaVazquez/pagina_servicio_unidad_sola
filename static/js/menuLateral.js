let containerMenuAndContent = document.getElementsByClassName('containerMenuAndContentClose');
let containerMenuAndContentPrimeraSeccion = document.getElementsByClassName('containerMenuAndContent-primeraSeccion');
let botonFlotante1 = document.getElementById('botonFlotante1');
let botonFlotanteIcon1 = document.getElementById('botonFlotanteIcon1');

let menuState = "close";

botonFlotante1.addEventListener('click', () => {
    if(menuState == "open"){
        containerMenuAndContentPrimeraSeccion[0].classList.add('hideElement');
        containerMenuAndContent[0].classList.add('containerMenuAndContent');
        botonFlotanteIcon1.classList.remove('bi-x');
        botonFlotanteIcon1.classList.add('bi-list');
        menuState = "close";
    }else{
        containerMenuAndContentPrimeraSeccion[0].classList.remove('hideElement');
        containerMenuAndContent[0].classList.remove('containerMenuAndContent');
        botonFlotanteIcon1.classList.add('bi-x');
        botonFlotanteIcon1.classList.remove('bi-list');
        menuState = "open";
    }
});