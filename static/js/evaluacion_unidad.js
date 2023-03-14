function pregunta(numero) {
    //Respuestas para las preguntas
    let respuestasId = [0, "pregunta1_opt3"
        , "pregunta2_opt4", "pregunta3_opt2"
        , "pregunta4_opt3", "pregunta5_opt3"
        , "pregunta6_opt2", "pregunta7_opt2"
        , "pregunta8_opt4", "pregunta9_opt1"
        , "pregunta10_opt2", "pregunta11_opt4"
        , "pregunta12_opt3", "pregunta13_opt3"
        , "pregunta14_opt4", "pregunta15_opt3"
        , "pregunta16_opt1", "pregunta17_opt2"
        , "pregunta18_opt4", "pregunta19_opt1"
        , "pregunta20_opt3", "pregunta21_opt1"
        , "pregunta22_opt3", "pregunta23_opt3"
        , "pregunta24_opt2", "pregunta25_opt4"
        , "pregunta26_opt1", "pregunta27_opt4"
        , "pregunta28_opt2", "pregunta29_opt2"
        , "pregunta30_opt4"];

    //Explicaciones de las preguntas
    let respuestasExplicacion = [0, "Opcion 3"
        , "Opcion 4", "Opción texto largo de ejemplo 2"
        , "Opción 3 de ejemplo", "Respuesta de la 5 es la tercera"
        , "Respuesta de la 6", "Respuesta de la 7"
        , "Respuesta de la 8", "Respuesta de la 9"
        , "Respuesta de la 10", "Respuesta de la 11"
        , "Respuesta de la 12", "Respuesta de la 13"
        , "Respuesta de la 14", "Respuesta de la 15"
        , "Respuesta de la 16", "Respuesta de la 17"
        , "Respuesta de la 18", "Respuesta de la 19"
        , "Respuesta de la 20", "Respuesta de la 21"
        , "Respuesta de la 22", "Respuesta de la 23"
        , "Respuesta de la 24", "Respuesta de la 25"
        , "Respuesta de la 26", "Respuesta de la 27"
        , "Respuesta de la 28", "Respuesta de la 29"
        , "Respuesta de la 30"];

    let respuestaCorrectaId = respuestasId[numero]
    let contenedor = document.getElementById("pregunta" + String(numero))
    let retroalimentacion = contenedor.querySelector("#retroalimentacion")
    var respuestaAlumnoId = contenedor.querySelector("section>div>input:checked").id

    if (respuestaCorrectaId == respuestaAlumnoId) {
        retroalimentacion.innerHTML = "La respuesta es correcta";
    } else {
        retroalimentacion.innerHTML = "Incorrecto, la respuesta era " + respuestasExplicacion[numero]
    }
}

function preguntas_aleatorias() {

    const preguntas_aleatorias_indices = [0]
    const preguntas = [
        0,
        {
            "enunciado": "Enunciado de la pregunta 1",
            "opciones": [123, 2334, 434, 45],
        },
        {
            "enunciado": "Enunciado de la pregunta 2",
            "opciones": [123, 2334, 434, 567],
        },
        {
            "enunciado": "Enunciado de la pregunta 3",
            "opciones": [123, 2334, 434, 45],
        },
        {
            "enunciado": "Enunciado de la pregunta 4",
            "opciones": [123, 2334, 434, 56],
        },
        {
            "enunciado": "Enunciado de la pregunta 5",
            "opciones": [123, 2334, 434, 56],
        },
        {
            "enunciado": "Enunciado de la pregunta 6",
            "opciones": [123, 2334, 434, 56],
        },
        {
            "enunciado": "Enunciado de la pregunta 7",
            "opciones": [123, 2334, 434, 56],
        },
        {
            "enunciado": "Enunciado de la pregunta 8",
            "opciones": [123, 2334, 434, 56],
        },
        {
            "enunciado": "Enunciado de la pregunta 9",
            "opciones": [123, 2334, 434, 563],
        },
        {
            "enunciado": "Enunciado de la pregunta 10",
            "opciones": [123, 2334, 434, 345],
        },
        {
            "enunciado": "Enunciado de la pregunta 11",
            "opciones": [123, 2334, 434, 3456],
        },
        {
            "enunciado": "Enunciado de la pregunta 12",
            "opciones": [123, 2334, 434, 3541],
        },
        {
            "enunciado": "Enunciado de la pregunta 13",
            "opciones": [123, 2334, 434],
        },
        {
            "enunciado": "Enunciado de la pregunta 14",
            "opciones": [123, 2334, 434, 5655],
        },
        {
            "enunciado": "Enunciado de la pregunta 15",
            "opciones": [123, 2334, 434, 455],
        },
        {
            "enunciado": "Enunciado de la pregunta 16",
            "opciones": [123, 2334, 434, 3434],
        },
        {
            "enunciado": "Enunciado de la pregunta 17",
            "opciones": [123, 2334, 434, 452],
        },
        {
            "enunciado": "Enunciado de la pregunta 18",
            "opciones": [123, 2334, 434, 3434],
        }
    ]


    while (preguntas_aleatorias_indices.length < 11) {
        numero = aleatorio(1, preguntas.length);
        if (preguntas_aleatorias_indices.includes(numero) == false) {
            preguntas_aleatorias_indices.push(numero)
        }
    }


    let contenedor_preguntas = document.getElementById('contenedor_preguntas');
    let contenido_preguntas = "";
    for (i = 1; i < preguntas_aleatorias_indices.length; i++) {
        contenido_preguntas = contenido_preguntas + `
        <div class="card">
        <div class="card-body" id="pregunta${preguntas_aleatorias_indices[i]}">
            <h5 class="card-title textoReadingTitle">Pregunta ${preguntas_aleatorias_indices[i]}</h5>
            <p class="textoReading">${preguntas[preguntas_aleatorias_indices[i]].enunciado}</p>
            <section class="m-3" >
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault1"
                        id="pregunta${preguntas_aleatorias_indices[i]}_opt1">
                    <label class="form-check-label textoReading" for="pregunta${preguntas_aleatorias_indices[i]}_opt1">
                    ${preguntas[preguntas_aleatorias_indices[i]].opciones[0]}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault1"
                        id="pregunta${preguntas_aleatorias_indices[i]}_opt2">
                    <label class="form-check-label textoReading" for="pregunta${preguntas_aleatorias_indices[i]}_opt2">
                    ${preguntas[preguntas_aleatorias_indices[i]].opciones[1]}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault1"
                        id="pregunta${preguntas_aleatorias_indices[i]}_opt3">
                    <label class="form-check-label textoReading" for="pregunta${preguntas_aleatorias_indices[i]}_opt3">
                    ${preguntas[preguntas_aleatorias_indices[i]].opciones[2]}
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault1"
                        id="pregunta${preguntas_aleatorias_indices[i]}_opt4">
                    <label class="form-check-label textoReading" for="pregunta${preguntas_aleatorias_indices[i]}_opt4">
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
    contenedor_preguntas.innerHTML = contenido_preguntas

}

function aleatorio(a, b) {
    var aleatorio = Math.round(Math.random() * (b - a) + parseInt(a));
    return aleatorio
}

preguntas_aleatorias();