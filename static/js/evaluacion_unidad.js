function pregunta(numero) {
    let respuestasId = [0, "pregunta1_opt3", "pregunta2_opt4", "pregunta3_opt2", "pregunta4_opt3"]
    let respuestasExplicacion = [0, "Opcion 3", "Opcion 4", "Opción texto largo de ejemplo 2", "Opción 3 de ejemplo"]
    let respuestaCorrectaId = respuestasId[numero]
    let contenedor = document.getElementById("pregunta" + String(numero))
    let retroalimentacion = contenedor.querySelector("#retroalimentacion")
    var respuestaAlumnoId = contenedor.querySelector("section>div>input:checked").id

    if (respuestaCorrectaId == respuestaAlumnoId) {
        retroalimentacion.innerHTML = "La respuesta es correcta"
    } else {
        retroalimentacion.innerHTML = "Incorrecto, la respuesta era " + respuestasExplicacion[numero]
    }
}

function preguntas_aleatorias() {
    
    const preguntas_aleatorias_indices=[0]
    const preguntas = [
        0,
        {
            "enunciado": "pregunta 1",
            "opciones":[123,2334,434,45],
        },
        {
            "enunciado": "pregunta 2",
            "opciones":[123,2334,434,567],
        },
        {
            "enunciado": "pregunta 3",
            "opciones":[123,2334,434,45],
        },
        {
            "enunciado": "pregunta 4",
            "opciones":[123,2334,434,56],
        },
        {
            "enunciado": "pregunta 5",
            "opciones":[123,2334,434,56],
        },
        {
            "enunciado": "pregunta 6",
            "opciones":[123,2334,434,56],
        },
        {
            "enunciado": "pregunta 7",
            "opciones":[123,2334,434,56],
        },
        {
            "enunciado": "pregunta 8",
            "opciones":[123,2334,434,56],
        },
        {
            "enunciado": "pregunta 9",
            "opciones":[123,2334,434,563],
        },
        {
            "enunciado": "pregunta 10",
            "opciones":[123,2334,434,345],
        },
        {
            "enunciado": "pregunta 11",
            "opciones":[123,2334,434,3456],
        },
        {
            "enunciado": "pregunta 12",
            "opciones":[123,2334,434,3541],
        },
        {
            "enunciado": "pregunta 13",
            "opciones":[123,2334,434],
        },
        {
            "enunciado": "pregunta 14",
            "opciones":[123,2334,434,5655],
        },
        {
            "enunciado": "pregunta 15",
            "opciones":[123,2334,434,455],
        },
        {
            "enunciado": "pregunta 16",
            "opciones":[123,2334,434,3434],
        },
        {
            "enunciado": "pregunta 17",
            "opciones":[123,2334,434,452],
        },
        {
            "enunciado": "pregunta 18",
            "opciones":[123,2334,434,3434],
        }
    ]


    while(preguntas_aleatorias_indices.length<11){
        numero=aleatorio(1,preguntas.length);
        if (preguntas_aleatorias_indices.includes(numero)==false) {
            preguntas_aleatorias_indices.push(numero)
        }
    }
    

    let contenedor_preguntas = document.getElementById('contenedor_preguntas');
    let contenido_preguntas="";
    for(i=1;i<preguntas_aleatorias_indices.length;i++){
        contenido_preguntas = contenido_preguntas+ `
        <div class="card">
        <div class="card-body" id="pregunta${preguntas_aleatorias_indices[i]}">
            <h5 class="card-title">Pregunta ${preguntas_aleatorias_indices[i]}</h5>
            <p>${preguntas[preguntas_aleatorias_indices[i]].enunciado}</p>
            <section class="m-3" >
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault1"
                        id="pregunta${preguntas_aleatorias_indices[i]}_opt1">
                    <label class="form-check-label" for="pregunta${preguntas_aleatorias_indices[i]}_opt1">
                    ${preguntas[preguntas_aleatorias_indices[i]].opciones[0]}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault1"
                        id="pregunta${preguntas_aleatorias_indices[i]}_opt2">
                    <label class="form-check-label" for="pregunta${preguntas_aleatorias_indices[i]}_opt2">
                    ${preguntas[preguntas_aleatorias_indices[i]].opciones[1]}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault1"
                        id="pregunta${preguntas_aleatorias_indices[i]}_opt3">
                    <label class="form-check-label" for="pregunta${preguntas_aleatorias_indices[i]}_opt3">
                    ${preguntas[preguntas_aleatorias_indices[i]].opciones[2]}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault1"
                        id="pregunta${preguntas_aleatorias_indices[i]}_opt4">
                    <label class="form-check-label" for="pregunta${preguntas_aleatorias_indices[i]}_opt4">
                    ${preguntas[preguntas_aleatorias_indices[i]].opciones[3]}
                    </label>
                </div>
            </section>
            <div id="retroalimentacion">

            </div>
            <div class="d-grid gap-2">
                <button class="btn btn-primary" onclick="pregunta(${preguntas_aleatorias_indices[i]})" type="button">Evaluar</button>
            </div>
        </div>
    </div>
        `;
    }
    contenedor_preguntas.innerHTML=contenido_preguntas

}

function aleatorio(a,b) {
    var aleatorio = Math.round(Math.random()*(b-a)+parseInt(a));
    return aleatorio
}

preguntas_aleatorias();
