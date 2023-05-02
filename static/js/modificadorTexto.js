//Identificador de texto dinamico
let textoDinamicoIdentificador = document.getElementsByClassName('textoDinamicoIdentificador');

//Clases tamaños
let textoReadingElementsH1 = document.getElementsByClassName('textoReadingH1');
let textoReadingElementsH3 = document.getElementsByClassName('textoReadingH3');
let textoReadingElementsH2 = document.getElementsByClassName('textoReadingH2');

//Arrays de tamaños
let textoReadingElementsH2Arr = [...textoReadingElementsH2];
let textoReadingElementsH1Arr = [...textoReadingElementsH1];
let textoReadingElementsH3Arr = [...textoReadingElementsH3];

//Cantidad de textos
let totalTextosDinamicos = textoReadingElementsH2.length;

//Botones para el tamaño del texto
let textSizeOne = document.getElementsByClassName('textSizeOne');
let textSizeTwo = document.getElementsByClassName('textSizeTwo');
let textSizeThree = document.getElementsByClassName('textSizeThree');

//Conversion de array
let textSizeOneArr = [...textSizeOne];
let textSizeTwoArr = [...textSizeTwo];
let textSizeThreeArr = [...textSizeThree];

//Reemplazo de textos
function reemplazoH2H3porH1(){
    for(var i = 0; i < totalTextosDinamicos; i++){
        textoReadingElementsH2Arr.map(a => {
            a.classList.add('textoReadingH1');
            a.classList.remove('textoReadingH2');
            a.classList.remove('textoDinamicoIdentificador');
            a.classList.remove('textoReadingH3');
        });

        textoReadingElementsH3Arr.map(a => {
            a.classList.add('textoReadingH1');
            a.classList.remove('textoReadingH3');
            a.classList.remove('textoDinamicoIdentificador');
            a.classList.remove('textoReadingH2');
        });
    }
    console.log("Texto H1");
}


function reemplazoH1H2porH3(){
    for(var i = 0; i < totalTextosDinamicos; i++){
        textoReadingElementsH2Arr.map(a => {
            a.classList.add('textoReadingH3');
            a.classList.remove('textoReadingH2');
            a.classList.remove('textoDinamicoIdentificador');
            a.classList.remove('textoReadingH1');
        });
        
        textoReadingElementsH1Arr.map(a => {
            a.classList.add('textoReadingH3');
            a.classList.remove('textoReadingH1');
            a.classList.remove('textoDinamicoIdentificador');
            a.classList.remove('textoReadingH2');
        });
    }
    console.log("Texto H3");
}
function reemplazoH1H3porH2(){
    for(var i = 0; i < totalTextosDinamicos; i++){
        textoReadingElementsH1Arr.map(a => {
            a.classList.add('textoDinamicoIdentificador');
            a.classList.remove('textoReadingH2');
            a.classList.remove('textoReadingH3');
            a.classList.remove('textoReadingH1');
        });
        
        textoReadingElementsH3Arr.map(a => {
            a.classList.add('textoDinamicoIdentificador');
            a.classList.remove('textoReadingH2');
            a.classList.remove('textoReadingH3');
            a.classList.remove('textoReadingH1');
        });

        textoReadingElementsH2Arr.map(a => {
            a.classList.add('textoDinamicoIdentificador');
            a.classList.remove('textoReadingH2');
            a.classList.remove('textoReadingH3');
            a.classList.remove('textoReadingH1');
        });

    }
}

//Cambios en los botones cuando son presionados (Estilos)
//Tamaño H1
for(var i = 0; i < textSizeOne.length; i++){
    textSizeOne[i].addEventListener('click', () => {
        textSizeOneArr.map(e => {
            e.classList.add('containerSizeTextButton');
        });

        textSizeTwoArr.map(e => {
            e.classList.remove('containerSizeTextButton');
        });

        textSizeThreeArr.map(e => {
            e.classList.remove('containerSizeTextButton');
        });

        reemplazoH2H3porH1();
    })
}

//Tamaño H2
for(var i = 0; i < textSizeTwo.length; i++){
    textSizeTwo[i].addEventListener('click', () => {
        textSizeOneArr.map(e => {
            e.classList.remove('containerSizeTextButton');
        });

        textSizeTwoArr.map(e => {
            e.classList.add('containerSizeTextButton');
        });

        textSizeThreeArr.map(e => {
            e.classList.remove('containerSizeTextButton');
        });

        reemplazoH1H3porH2();
    })
}

//Tamaño H3
for(var i = 0; i < textSizeThree.length; i++){
    textSizeThree[i].addEventListener('click', () => {
        textSizeOneArr.map(e => {
            e.classList.remove('containerSizeTextButton');
        });

        textSizeTwoArr.map(e => {
            e.classList.remove('containerSizeTextButton');
        });

        textSizeThreeArr.map(e => {
            e.classList.add('containerSizeTextButton');
        });

        reemplazoH1H2porH3();
    })
}


//Para los botones en bold e italic y el space line

//Bold
$('.textChangeBold').click( function() {
    $(this).toggleClass('containerSizeTextButton');

    $('.textChangeBold').addClass('containerSizeTextButton');

    $('.textChangeItalic').removeClass('containerSizeTextButton');
    $('.textChangeSpaceLine').removeClass('containerSizeTextButton');
    $('.textChangeUnderline').removeClass('containerSizeTextButton');
    $('.textChangeHighlight').removeClass('containerSizeTextButton');
    $(".idFacto").removeClass('textoResaltadoFacto');
    $('.textAlignLeft').removeClass('containerSizeTextButton');


    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textBoldOwn')
});

//Italic
$('.textChangeItalic').click( function() {
    $(this).toggleClass('containerSizeTextButton');

    $('.textChangeItalic').addClass('containerSizeTextButton');

    $('.textChangeBold').removeClass('containerSizeTextButton');
    $('.textChangeSpaceLine').removeClass('containerSizeTextButton');
    $('.textChangeUnderline').removeClass('containerSizeTextButton');
    $('.textChangeHighlight').removeClass('containerSizeTextButton');
    $(".idFacto").removeClass('textoResaltadoFacto');
    $('.textAlignLeft').removeClass('containerSizeTextButton');


    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textItalicOwn')
});

//SpaceLine
$('.textChangeSpaceLine').click( function() {
   $(this).toggleClass('containerSizeTextButton');

   $('.textChangeSpaceLine').addClass('containerSizeTextButton');

   $('.textChangeBold').removeClass('containerSizeTextButton');
   $('.textChangeItalic').removeClass('containerSizeTextButton');
   $('.textChangeUnderline').removeClass('containerSizeTextButton');
   $('.textChangeHighlight').removeClass('containerSizeTextButton');
   $(".idFacto").removeClass('textoResaltadoFacto');
   $('.textAlignLeft').removeClass('containerSizeTextButton');

        

    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textSpaceLineOwn')
});

//Underline
$('.textChangeUnderline').click( function() {
    $(this).toggleClass('containerSizeTextButton');

    $('.textChangeUnderline').addClass('containerSizeTextButton');

    $('.textChangeBold').removeClass('containerSizeTextButton');
    $('.textChangeItalic').removeClass('containerSizeTextButton');
    $('.textChangeSpaceLine').removeClass('containerSizeTextButton');
    $('.textChangeHighlight').removeClass('containerSizeTextButton');
    $(".idFacto").removeClass('textoResaltadoFacto');
    $('.textAlignLeft').removeClass('containerSizeTextButton');

    

    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textLineSubOwn')
});

//Highlight
$('.textChangeHighlight').click( function() {
    
    if ($(this).hasClass("containerSizeTextButton")==true) {
        $('.textChangeHighlight').removeClass('containerSizeTextButton');
        $(".idFacto").removeClass('textoResaltadoFacto');

    } else{

    $(this).toggleClass('containerSizeTextButton');

    $('.textChangeHighlight').addClass('containerSizeTextButton');
    $(".idFacto").addClass('textoResaltadoFacto');
    
    $('.textChangeBold').removeClass('containerSizeTextButton');
    $('.textChangeItalic').removeClass('containerSizeTextButton');
    $('.textChangeSpaceLine').removeClass('containerSizeTextButton');
    $('.textChangeUnderline').removeClass('containerSizeTextButton');
    $('.textAlignLeft').removeClass('containerSizeTextButton');

    }
});


//Align texts
$('.textAlignLeft').click( function() {
    $(this).toggleClass('containerSizeTextButton');

    $('.textAlignLeft').addClass('containerSizeTextButton');

    $('.textChangeBold').removeClass('containerSizeTextButton');
    $('.textChangeItalic').removeClass('containerSizeTextButton');
    $('.textChangeSpaceLine').removeClass('containerSizeTextButton');
    $('.textChangeHighlight').removeClass('containerSizeTextButton');
    $('.textChangeUnderline').removeClass('containerSizeTextButton');
    $(".idFacto").removeClass('textoResaltadoFacto');
    


    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textAlignLeftOwn')
});

