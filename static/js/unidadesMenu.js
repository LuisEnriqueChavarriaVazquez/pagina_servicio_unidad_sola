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

$('.nav-link.u44').hover(function(){
    $('.dropdown-menu').removeClass('show');
});

$('.containerMenuAndContent-segundaSeccion').hover(function(){
    $('.dropdown-menu').removeClass('show')
})

$('.dropdown-item').on('click',function(){

    $('.dropdown-menu').removeClass('show');
    
});

$('.nav-link.int').hover(function() {
    $('.dropdown-menu').removeClass('show')
})


function verAnualidades() {
    document.getElementById("v-pills-4.2-tab").click();
}


function seleccionaPadre(unidad) {


  $('.nav-link').removeClass('btnActive')

  padre=$('.nav-link.'+unidad)
  padre.addClass('btnActive')

}

