/* Script para el manejo del drag and drop */
$( function() {
  $( ".conceptosCaja" ).draggable({
    revert: "invalid",
    // drag: function( event, ui ) {
    //   $( this )
    //   .css("z-index",actualIndex++);
    // }
  });

  $( ".definicionCaja" ).droppable({
    drop: function( event, ui ) {
      $(this)
        //Modificamos la caja que contiene el icono de like
        .find('div')
        .addClass( "clgreyl3" )
        .removeClass('clgreyl1');

        //Obtenemos el valor del concepto
        let valorDefTemp = $(this).attr('valorConcepto');
        //console.log('valorDefTemp: ', valorDefTemp);

        //Obtenemos el valor de la descripcion
        let valorConcepTemp = ui.draggable;
        let numeroDePreguntaDragAndDrop = valorConcepTemp.attr('valorDef');
        let idDePreguntaDragAndDrop = valorConcepTemp.attr('id'); 
        valorConcepTemp.hide();
        valorConcepTemp = valorConcepTemp.text().trim();
        //console.log('valorConcepTemp: ', valorConcepTemp);

        //Recolectamos el concepto y la definicion dado
        collectAnswers(valorDefTemp, valorConcepTemp, numeroDePreguntaDragAndDrop, idDePreguntaDragAndDrop);

        //Limita la cantidad de elementos a 1
        let hijos = $(this).siblings();
        if(hijos.length > 0){
          //console.log(hijos); //Nombre del concepto
          //console.log(hijos.prevObject); //Nombre del concepto
          $(this).droppable('disable');
        }

        $( this )
          //En cuanto soltamos el elemento modificamos el contenedor
          .addClass( "rightDropped" )
          .removeClass( "ui-droppable " )
          .find( "p" )
          .html( valorConcepTemp );
          M.toast({html: 'Definición vinculada a concepto'});

        $(this)
          //Modificamos el estilo del icono cuando el elemento fue soltado
          .find('span')
          .html('thumb_up');
    },
  });
});

//Funcion de recolección de respuestas (al momento de soltar la palabra en la casilla)
let respuestasDragAndDrop = [[],[]];
function collectAnswers(definicion, concepto, numeroPregunta, idPregunta){
  let temporalAnswerObject = "";
  //Dependiendo del tipo de pregunta
  if(numeroPregunta == "preguntaDragAndDrop_0"){
    temporalAnswerObject = {concepto, definicion, idPregunta};
    respuestasDragAndDrop[0].push(temporalAnswerObject);
  }else{
    temporalAnswerObject = {concepto, definicion, idPregunta};
    respuestasDragAndDrop[1].push(temporalAnswerObject);
  }
  //console.log(respuestasDragAndDrop);
}

//Listado de conceptos
let questionsDragAndDrop = [
  [
    {
        concepto: "Concepto 1.1",
        definicion: "Lorem ipsum dolorignissimos. Minus molestias idofficia ipsum corrupti impedit.",
    },
    {
        concepto: "Concepto 1.2",
        definicion: "Ullam dignissimos. Minus molestias idofficia ipsum corrupti impedit. ullam dignissimos. Minus molestias.",
    },
    {
        concepto: "Concepto 1.3",
        definicion: "Illum quos perspiciatis, voluptatum veritatis error nihil laboriosam earum voluptatem aliquid, facilis consequatur.",
    },
    {
        concepto: "Concepto 1.4",
        definicion: "Ameconsectetur aliquam dignissimos porro explicabo.",
    },
    {
      id: "0"
    }
  ],
  [
    {
        concepto: "Concepto 2.1",
        definicion: "Lorem ipsum dolor sit amet consect offcorrupti impedit.",
    },
    {
        concepto: "Concepto 2.2",
        definicion: "Ullam dignissimos. Minus molestias idoffi Minus molestias.",
    },
    {
        concepto: "Concepto 2.3",
        definicion: "Illum quos perspiciatis, voluptatum vertem aliquid, facilis consequatur.",
    },
    {
        concepto: "Concepto 2.4",
        definicion: "Ameconsectetur aliquam dignissimos porro explicabo.",
    },
    {
      id: "1"
    }
  ],
  [
    {
        concepto: "Concepto 3.1",
        definicion: "Lorem ipsum dolor sit amet consect sdm,dsmsdm sd,msd,msd, offcorrupti impedit.",
    },
    {
        concepto: "Concepto 3.2",
        definicion: "Ullam dignissimos. Minus molestias idoffi Minus molestias.",
    },
    {
        concepto: "Concepto 3.3",
        definicion: "Illum quos perspiciatis, voluptatum vertem aliquid, facilis consequatur.",
    },
    {
        concepto: "Concepto 3.4",
        definicion: "Ameconsectetur aliquam dignissimos porro explicabo.",
    },
    {
      id: "2"
    }
  ],
  [
    {
        concepto: "Concepto 4.1",
        definicion: "Lorem ipsum dolor sit amet consect offcorrupti impedit.",
    },
    {
        concepto: "Concepto 4.2",
        definicion: "Ullam dignissimos. Minus molestias idoffi Minus molestias.",
    },
    {
        concepto: "Concepto 4.3",
        definicion: "Illum quos perspiciatis, voluptatum vertem aliquid, facilis consequatur.",
    },
    {
        concepto: "Concepto 4.4",
        definicion: "Ameconsectetur aliquam dignissimos porro explicabo.",
    },
    {
      id: "3"
    }
  ],
  [
    {
        concepto: "Concepto 5.1",
        definicion: "Lorem ipsum dolor sit amet consect offcorrupti impedit.",
    },
    {
        concepto: "Concepto 5.2",
        definicion: "Ullam dignissimos. Minus molestias idoffi Minus molestias.",
    },
    {
        concepto: "Concepto 5.3",
        definicion: "Illum quos perspiciatis, voluptatum vertem aliquid, facilis consequatur.",
    },
    {
        concepto: "Concepto 5.4",
        definicion: "Ameconsectetur aliquam dignissimos porro explicabo.",
    },
    {
      id: "4"
    }
  ]
];

//Mezclamos el array de opciones
let oldOrderquestionsDragAndDrop = [...questionsDragAndDrop];
let suffledquestionsDragAndDrop = shuffle(questionsDragAndDrop);

//Array para el PDF
let arrayDragAndDropPDFRespuestas = [];

//Contenedor de las preguntas de drag and drop
let contenedor_preguntas_drag = document.getElementById('contenedor_preguntas_two');
for(var h = 0; h < 2; h++){

    let arrayDragAndDropPDFRespuestasMini = [
      suffledquestionsDragAndDrop[h][0].concepto,
      suffledquestionsDragAndDrop[h][1].concepto,
      suffledquestionsDragAndDrop[h][2].concepto,
      suffledquestionsDragAndDrop[h][3].concepto,
      suffledquestionsDragAndDrop[h][0].definicion,
      suffledquestionsDragAndDrop[h][1].definicion,
      suffledquestionsDragAndDrop[h][2].definicion,
      suffledquestionsDragAndDrop[h][3].definicion
    ];

    arrayDragAndDropPDFRespuestas.push(arrayDragAndDropPDFRespuestasMini);

    contenedor_preguntas_drag.innerHTML += `
    <section class="conceptsDefinitionContainer clgreyl3 border1 shadow2 lazy">
    
      <!--Numero y enunciado de la pregunta-->
      <div class="titleQuestionContainerSecondary">
          <h5 class="preguntaIdentificador clgreyl2 clbktx border1 textoStandar numeracionPregunta">Numero de la pregunta</h5>
          <a class="waves-effect waves-light tooltipped clgreyl2 clbktx border1"
              data-position="left" data-tooltip="Relaciona los conceptos con su definición">
              <i class="material-icons">help</i>
          </a>
      </div>
    
      <section class="conceptosCajaContainer">
        <div class="conceptosCaja border1 clbordertdotted shadow2 textoStandar clw clbktx" id="defQuestionId_${0}_${h}" valorDef="preguntaDragAndDrop_${h}">
          <p>${suffledquestionsDragAndDrop[h][0].concepto}</p>
        </div>
    
        <div class="conceptosCaja border1 clbordertdotted shadow2 textoStandar clw clbktx" id="defQuestionId_${1}_${h}" valorDef="preguntaDragAndDrop_${h}">
          <p>${suffledquestionsDragAndDrop[h][1].concepto}</p>
        </div>
    
        <div class="conceptosCaja border1 clbordertdotted shadow2 textoStandar clw clbktx" id="defQuestionId_${2}_${h}" valorDef="preguntaDragAndDrop_${h}">
          <p>${suffledquestionsDragAndDrop[h][2].concepto}</p>
        </div>
    
        <div class="conceptosCaja border1 clbordertdotted shadow2 textoStandar clw clbktx" id="defQuestionId_${3}_${h}" valorDef="preguntaDragAndDrop_${h}">
          <p>${suffledquestionsDragAndDrop[h][3].concepto}</p>
        </div>
      </section>
    
      <section class="definicionCajaContainerFather">
        <div class="definicionCajaContainer shadow2 clgreyl1 border1">
          <p class="textoStandar clbktx">${suffledquestionsDragAndDrop[h][0].definicion}</p>
          <div class="definicionCaja clbordertdotted clw shadow2h border1" valorConcepto="${suffledquestionsDragAndDrop[h][0].definicion}">
            <p class="textoStandar clbktx">Arrastra el concepto aquí</p>
            <div id="stateQuestion_${0}_${h}" class="border1 clgreyl1">
              <span class="material-icons clbktx">swipe_up</span>
            </div>
          </div>
        </div>
        <div class="definicionCajaContainer shadow2 clgreyl1 border1">
          <p class="textoStandar clbktx">${suffledquestionsDragAndDrop[h][1].definicion}</p>
          <div class="definicionCaja clbordertdotted clw shadow2h border1" valorConcepto="${suffledquestionsDragAndDrop[h][1].definicion}">
            <p class="textoStandar clbktx">Arrastra el concepto aquí</p>
            <div id="stateQuestion_${1}_${h}" class="border1 clgreyl1">
              <span class="material-icons clbktx">swipe_up</span>
            </div>
          </div>
        </div>
        <div class="definicionCajaContainer shadow2 clgreyl1 border1">
          <p class="textoStandar clbktx">${suffledquestionsDragAndDrop[h][2].definicion}</p>
          <div class="definicionCaja clbordertdotted clw shadow2h border1" valorConcepto="${suffledquestionsDragAndDrop[h][2].definicion}">
            <p class="textoStandar clbktx">Arrastra el concepto aquí</p>
            <div id="stateQuestion_${2}_${h}" class="border1 clgreyl1">
              <span class="material-icons clbktx">swipe_up</span>
            </div>
          </div>
        </div>
        <div class="definicionCajaContainer shadow2 clgreyl1 border1">
          <p class="textoStandar clbktx">${suffledquestionsDragAndDrop[h][3].definicion}</p>
          <div class="definicionCaja clbordertdotted clw shadow2h border1" valorConcepto="${suffledquestionsDragAndDrop[h][3].definicion}">
            <p class="textoStandar clbktx">Arrastra el concepto aquí</p>
            <div id="stateQuestion_${3}_${h}" class="border1 clgreyl1">
              <span class="material-icons clbktx">swipe_up</span>
            </div>
          </div>
        </div>
      </section>
    
      <!--Boton para revisar la pregunta-->
      <div class="evaluateQuestionContainer">
        <a class='btn-large btnIndividualQuestion waves-effect waves-light border1 cl5 white-text' id="buttonEvaluateDragAndDrop_${h}" onclick="checkDragAndDrop('${h}','${suffledquestionsDragAndDrop[h][4].id}','buttonEvaluateDragAndDrop_${h}','retroalimentacionDragAndDrop_${h}')">Revisar
          conceptos<i class="material-icons right">done</i></a>
        <!--Retroalimentacion de la pregunta-->
        <div id="retroalimentacionDragAndDrop_${h}" cajaRetroalimentacion="retroalimentacion"></div>
      </div>
    
    </section>
    `;
};

//Estas funciones son para cuando el usuario presiona el boton de revisar.
function checkDragAndDrop(numeroPregunta,id_preguntas,id_button, id_retroalimentacion){
  if(respuestasDragAndDrop[0].length == 4 || respuestasDragAndDrop[1].length == 4){
      //Llamamos a la funcion para colectar la data y esta funcion al mismo tiempo evaluara el puntaje
      //El parametro es el indice de la pregunta en el orden que aparece en el DOM
      let puntos = initiateEvaluation(numeroPregunta, id_preguntas);

      //Quitamos el boton de evaluacion
      let buttonEvaluationDragAndDrop = document.getElementById(id_button);
      buttonEvaluationDragAndDrop.setAttribute('style', 'display: none;');

      //Agregamos la retroalimentacion
      let retroalimentacionDragAndDrop = document.getElementById(id_retroalimentacion);
      retroalimentacionDragAndDrop.innerText = (puntos/4) + " de 1 punto obtenido";
      retroalimentacionDragAndDrop.classList.add('mensajeNeutra');

      //IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
      puntajeTotal += (puntos/4);
      preguntasContestadasTotal++;

      //Mensaje de pregunta correctas e incorrectas
      M.toast({html: `Pregunta evaluada`});

      //Validamos que el examen se hay terminado en este punto
      validateExamenCompletado();
      
  }else{
    //Validacion de preguntas faltantes
    M.toast({html: `Aún faltan conceptos por relacionar.`});
  }

  //IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
  //Cada que se responda pregunta correcta se actualiza contador
  contadorPreguntas.innerText = puntajeTotal;
  contadorPreguntas2.innerText = puntajeTotal;

  //IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
  //Cada que contestemos una pregunta se actualiza el contador
  contadorPreguntasRespondidas.innerText = preguntasContestadasTotal;
  contadorPreguntasRespondidas2.innerText = preguntasContestadasTotal;

  //IMPORTANTE... Estas variables estan en el archivo de puntajeActual.js
  //La barra se incrementa de tamaño con cada pregunta
  barraPreguntas.setAttribute('style', 'width:' + preguntasContestadasTotal*5 + '%');
  barraPreguntas2.setAttribute('style', 'width:' + preguntasContestadasTotal*5 + '%');
}

//Recolecta los datos de las respuestas de usuario y las respuestas correctas
function initiateEvaluation(questionIndex, id_preguntas){
  //Accedemos a las respuestas correctas
  let respuestasPregunta = oldOrderquestionsDragAndDrop[id_preguntas];
  
  //Accedemos a las respuestas del estudiante
  //console.log(respuestasDragAndDrop[questionIndex]);

  //Obtenemos el puntaje
  let puntos = evaluateDragAndDrop(respuestasPregunta,respuestasDragAndDrop[questionIndex], questionIndex);
  return puntos;
}

//Obtiene los puntajes de las preguntas
function evaluateDragAndDrop(respuestasCorrectas, respuestasUsuario, questionIndex){
  let puntaje = 0;
  let respuestasOrdenadas = ordenarRespuestas(respuestasUsuario, questionIndex);
  for(var i = 0; i < 4; i++){

    //Sumamos los conceptos  las definiciones
    let respuestasCorrectasToken = respuestasCorrectas[i].concepto + respuestasCorrectas[i].definicion;
    console.log('respuestasCorrectasToken: ', respuestasCorrectasToken);
    let respuestasUsuarioToken = respuestasOrdenadas[i].concepto + respuestasOrdenadas[i].definicion;
    console.log('respuestasUsuarioToken: ', respuestasUsuarioToken);

    //Comparamos las definiciones y los conceptos sumados
    if(respuestasCorrectasToken == respuestasUsuarioToken){
      //Agregamos estilos a la casilla correcta correcta
      let casillaEvaluada = document.getElementById(`stateQuestion_${i}_` + questionIndex);
      casillaEvaluada.innerHTML = '<span class="material-icons">done</span>';
      casillaEvaluada.classList.remove('clgreyl3');
      casillaEvaluada.classList.add('mensajeCorrecta');
      //Sumamos en caso de que coincidan el puntaje total
      puntaje++;
    }else{
      //Agregamos estilos a la casilla correcta correcta
      let casillaEvaluada = document.getElementById(`stateQuestion_${i}_` + questionIndex);
      casillaEvaluada.innerHTML = '<span class="material-icons">close</span>';
      casillaEvaluada.classList.remove('clgreyl3');
      casillaEvaluada.classList.add('mensajeIncorrecta');
    }
  }
  return puntaje;
}

//Funcion para ordenar las respuestas del usuario
function ordenarRespuestas(arrayDeRespuestasUsuario, numeroDePregunta){
  if(arrayDeRespuestasUsuario.length == 4){
    //console.log('Array sin ordenar: ', arrayDeRespuestasUsuario);
    let respuestasOrdenadas = [];
    var primero, segundo, tercero, cuarto;

    for(var i = 0; i < arrayDeRespuestasUsuario.length; i++){
      //Ordenamos la preguntas
      if(arrayDeRespuestasUsuario[i].idPregunta == `defQuestionId_0_${numeroDePregunta}`){
        primero = arrayDeRespuestasUsuario[i];
      }else if(arrayDeRespuestasUsuario[i].idPregunta == `defQuestionId_1_${numeroDePregunta}`){
        segundo = arrayDeRespuestasUsuario[i];
      }else if(arrayDeRespuestasUsuario[i].idPregunta == `defQuestionId_2_${numeroDePregunta}`){
        tercero = arrayDeRespuestasUsuario[i];
      }else if(arrayDeRespuestasUsuario[i].idPregunta == `defQuestionId_3_${numeroDePregunta}`){
        cuarto = arrayDeRespuestasUsuario[i];
      }
    }
    respuestasOrdenadas = [primero, segundo, tercero, cuarto];
    //console.log('respuestasOrdenadas: ', respuestasOrdenadas);
    return respuestasOrdenadas;
  }
}