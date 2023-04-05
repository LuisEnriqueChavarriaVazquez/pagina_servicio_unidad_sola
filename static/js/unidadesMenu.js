// let containerMenuAndContent = document.getElementsByClassName('containerMenuAndContentClose');
// let containerMenuAndContentPrimeraSeccion = document.getElementsByClassName('containerMenuAndContent-primeraSeccion');
// let botonFlotante1 = document.getElementById('botonFlotante1');
// let botonFlotanteIcon1 = document.getElementById('botonFlotanteIcon1');

// let menuState = "close";

// botonFlotante1.addEventListener('click', () => {
//     if(menuState == "open"){
//         containerMenuAndContentPrimeraSeccion[0].classList.add('hideElement');
//         containerMenuAndContent[0].classList.add('containerMenuAndContent');
//         botonFlotanteIcon1.classList.remove('bi-x');
//         botonFlotanteIcon1.classList.add('bi-list');
//         menuState = "close";
//     }else{
//         containerMenuAndContentPrimeraSeccion[0].classList.remove('hideElement');
//         containerMenuAndContent[0].classList.remove('containerMenuAndContent');
//         botonFlotanteIcon1.classList.add('bi-x');
//         botonFlotanteIcon1.classList.remove('bi-list');
//         menuState = "open";
//     }
// });

// let submenus=$(".nav-item.dropdown")
// console.log(submenus)


$('.nav-link.u41').hover(function(){
    $('.dropdown-menu').removeClass('show');
    $('.dropdown-menu.u41').addClass('show');

});

$('.nav-link.u42').hover(function(){
    $('.dropdown-menu').removeClass('show');
    $('.dropdown-menu.u42').addClass('show');

});

$('.nav-link.u43').hover(function(){
    $('.dropdown-menu').removeClass('show');
    $('.dropdown-menu.u43').addClass('show');

});


$('.dropdown-item').on('click',function(){

    $('.dropdown-menu').removeClass('show');
    
});

$('.nav-link.int').hover(function() {
    $('.dropdown-menu').removeClass('show')
})

$('.nav-link.u44').hover(function() {
    $('.dropdown-menu').removeClass('show')
})

$('.containerMenuAndContent-segundaSeccion').hover(function(){
    $('.dropdown-menu').removeClass('show')
})

// dropdown-menu show