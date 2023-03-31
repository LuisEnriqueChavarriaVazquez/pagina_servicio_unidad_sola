////////////////////////////////////////////////////////////
//Valores guardados en memoria
let bold_valueMemory = localStorage.getItem('bold_valueMemory');
let italic_valueMemory = localStorage.getItem('italic_valueMemory');
let underline_valueMemory = localStorage.getItem('underline_valueMemory');
let keyword_valueMemory = localStorage.getItem('keyword_valueMemory');
let leftalign_valueMemory = localStorage.getItem('leftalign_valueMemory');
let spaceline_valueMemory = localStorage.getItem('spaceline_valueMemory');
let fontsize_valueMemory = localStorage.getItem('fontsize_valueMemory');

//En caso de que los valores de los botones no existan no existan
if (bold_valueMemory === null || 
    italic_valueMemory === null || 
    underline_valueMemory === null || 
    keyword_valueMemory === null ||
    leftalign_valueMemory === null ||
    spaceline_valueMemory === null ||
    fontsize_valueMemory === null){

    localStorage.setItem('bold_valueMemory', '0');
    bold_valueMemory = localStorage.getItem('bold_valueMemory');

    localStorage.setItem('italic_valueMemory', '0');
    italic_valueMemory = localStorage.getItem('italic_valueMemory');

    localStorage.setItem('underline_valueMemory', '0');
    underline_valueMemory = localStorage.getItem('valueTextAdjust_3');

    localStorage.setItem('keyword_valueMemory', '1');
    keyword_valueMemory = localStorage.getItem('keyword_valueMemory');

    localStorage.setItem('leftalign_valueMemory', '0');
    leftalign_valueMemory = localStorage.getItem('leftalign_valueMemory');

    localStorage.setItem('spaceline_valueMemory', '0');
    spaceline_valueMemory = localStorage.getItem('spaceline_valueMemory');

    localStorage.setItem('fontsize_valueMemory', 'h2');
    fontsize_valueMemory = localStorage.getItem('fontsize_valueMemory');
}


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
        localStorage.setItem('fontsize_valueMemory', 'h1');
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
        localStorage.setItem('fontsize_valueMemory', 'h2');
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
        localStorage.setItem('fontsize_valueMemory', 'h3');
    })
}

//Estado de los botones
let stateCero = localStorage.getItem('bold_valueMemory');
let stateOne = localStorage.getItem('italic_valueMemory');
let stateTwo = localStorage.getItem('spaceline_valueMemory');
let stateThree = localStorage.getItem('underline_valueMemory');
let stateFour = 1;
let stateFive = localStorage.getItem('leftalign_valueMemory');
let stateSix = localStorage.getItem('fontsize_valueMemory');

//Funciones para comprobar estado de los botones al cargar la pagina
function checkMemoryButtonState(state,idElement,property){
    //Si no es el boton para palabras clave entonces...
    if(idElement != "fontsize_valueMemory" && idElement != "keyword_valueMemory"){
        if(state == 1){
            $(`.${idElement}`).addClass('containerSizeTextButton');
            $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").addClass(`${property}`);
        }else{
            $(`.${idElement}`).removeClass('containerSizeTextButton');
            $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").removeClass(`${property}`);
        }
    }else if(idElement == 'adjustFont_size'){
        if(state == "h2"){
            $('.textSizeOne').removeClass('containerSizeTextButton');
            $('.textSizeTwo').addClass('containerSizeTextButton');
            $('.textSizeThree').removeClass('containerSizeTextButton');
            reemplazoH1H3porH2();
        }else if(state == "h3"){
            $('.textSizeOne').removeClass('containerSizeTextButton');
            $('.textSizeTwo').removeClass('containerSizeTextButton');
            $('.textSizeThree').addClass('containerSizeTextButton');
            reemplazoH1H2porH3();
        }else if(state == "h1"){
            $('.textSizeOne').addClass('containerSizeTextButton');
            $('.textSizeTwo').removeClass('containerSizeTextButton');
            $('.textSizeThree').removeClass('containerSizeTextButton');
            reemplazoH2H3porH1();
        }
    }
}
checkMemoryButtonState(stateCero,'textChangeBold','textBoldOwn');
checkMemoryButtonState(stateOne,'textChangeItalic','textItalicOwn');
checkMemoryButtonState(stateThree,'textChangeUnderline','textLineSubOwn');
//checkMemoryButtonState(stateFour,'idFacto','textoResaltadoFacto');
checkMemoryButtonState(stateFive,'textAlignLeft','textAlignLeftOwn');
checkMemoryButtonState(stateTwo,'textChangeSpaceLine','textSpaceLineOwn');
//checkMemoryButtonState(stateSix,'adjustFont_size');

//Para los botones en bold e italic y el space line
//Bold
$('.textChangeBold').click( function() {
    $(this).toggleClass('containerSizeTextButton');

    if(stateCero == 0){
        $('.textChangeBold').addClass('containerSizeTextButton');
        //Guardado en memoria
        localStorage.setItem('bold_valueMemory', '1');
    }else{
        $('.textChangeBold').removeClass('containerSizeTextButton');
        //Guardado en memoria
        localStorage.setItem('bold_valueMemory', '0');
    }

    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textBoldOwn')
});

//Italic
$('.textChangeItalic').click( function() {
    $(this).toggleClass('containerSizeTextButton');

    if(stateOne == 0){
        $('.textChangeItalic').addClass('containerSizeTextButton');
        //Guardado en memoria
        localStorage.setItem('italic_valueMemory', '1');
    }else{
        $('.textChangeItalic').removeClass('containerSizeTextButton');
        //Guardado en memoria
        localStorage.setItem('italic_valueMemory', '0');
    }

    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textItalicOwn')
});

//SpaceLine
$('.textChangeSpaceLine').click( function() {
    $(this).toggleClass('containerSizeTextButton');

    if(stateTwo == 0){
        $('.textChangeSpaceLine').addClass('containerSizeTextButton');
        //Guardado en memoria
        localStorage.setItem('spaceline_valueMemory', '1');
    }else{
        $('.textChangeSpaceLine').removeClass('containerSizeTextButton');
        //Guardado en memoria
        localStorage.setItem('spaceline_valueMemory', '0');
    }

    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textSpaceLineOwn')
});

//Underline
$('.textChangeUnderline').click( function() {
    $(this).toggleClass('containerSizeTextButton');

    if(stateThree == 0){
        $('.textChangeUnderline').addClass('containerSizeTextButton');
        //Guardado en memoria
        localStorage.setItem('underline_valueMemory', '1');
    }else{
        $('.textChangeUnderline').removeClass('containerSizeTextButton');
        //Guardado en memoria
        localStorage.setItem('underline_valueMemory', '0');
    }

    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textLineSubOwn')
});

//Highlight
$('.textChangeHighlight').click( function() {
    $(this).toggleClass('containerSizeTextButton');

    if(stateFour == 0){
        stateFour = 1;
        $('.textChangeHighlight').addClass('containerSizeTextButton');
        $(".idFacto").addClass('textoResaltadoFacto');
    }else{
        stateFour = 0;
        $('.textChangeHighlight').removeClass('containerSizeTextButton');
        $(".idFacto").removeClass('textoResaltadoFacto');
    }
});


//Align texts
$('.textAlignLeft').click( function() {
    $(this).toggleClass('containerSizeTextButton');

    if(stateFive == 0){
        $('.textAlignLeft').addClass('containerSizeTextButton');
        //Guardado en memoria
        localStorage.setItem('leftalign_valueMemory', '1');
    }else{
        stateFive = 0;
        $('.textAlignLeft').removeClass('containerSizeTextButton');
        //Guardado en memoria
        localStorage.setItem('leftalign_valueMemory', '0');
    }

    //Accedemos a los textos
    $(".textoDinamicoIdentificador,.textoReadingH1,.textoReadingH2,.textoReadingH3").toggleClass('textAlignLeftOwn')
});
