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
    let contenedor_preguntas = document.getElementById('contenedor_preguntas');
    const preguntas_aleatorias_indices=[]
    const preguntas = [
        0,
        {
            "enunciado": "Molecule Man",
            "opciones":[0,123,2334,434],
            "respuesta": 2
        },
        {
            "enunciado": "Molecule Man",
            "opciones":[0,123,2334,434],
            "respuesta": 2
        },
        {
            "enunciado": "Molecule Man",
            "opciones":[0,123,2334,434],
            "respuesta": 2
        },
        {
            "enunciado": "Molecule Man",
            "opciones":[0,123,2334,434],
            "respuesta": 2
        },
        {
            "enunciado": "Molecule Man",
            "opciones":[0,123,2334,434],
            "respuesta": 2
        },
        {
            "enunciado": "Molecule Man",
            "opciones":[0,123,2334,434],
            "respuesta": 2
        },
        {
            "enunciado": "Molecule Man",
            "opciones":[0,123,2334,434],
            "respuesta": 2
        },
        {
            "enunciado": "Molecule Man",
            "opciones":[0,123,2334,434],
            "respuesta": 2
        },
        {
            "enunciado": "Molecule Man",
            "opciones":[0,123,2334,434],
            "respuesta": 2
        },
        {
            "enunciado": "Molecule Man",
            "opciones":[0,123,2334,434],
            "respuesta": 2
        },
        {
            "enunciado": "Molecule Man",
            "opciones":[0,123,2334,434],
            "respuesta": 2
        },
        {
            "enunciado": "Molecule Man",
            "opciones":[0,123,2334,434],
            "respuesta": 2
        },
        {
            "enunciado": "Molecule Man",
            "opciones":[0,123,2334,434],
            "respuesta": 2
        },
        {
            "enunciado": "Molecule Man",
            "opciones":[0,123,2334,434],
            "respuesta": 2
        },
        {
            "enunciado": "Molecule Man",
            "opciones":[0,123,2334,434],
            "respuesta": 2
        },
        {
            "enunciado": "Molecule Man",
            "opciones":[0,123,2334,434],
            "respuesta": 2
        },
        {
            "enunciado": "Molecule Man",
            "opciones":[0,123,2334,434],
            "respuesta": 2
        },
        {
            "enunciado": "Molecule Man",
            "opciones":[0,123,2334,434],
            "respuesta": 2
        }
    ]


    while(preguntas_aleatorias_indices.length<10){
        numero=aleatorio(1,preguntas.length);
        if (preguntas_aleatorias_indices.includes(numero)==false) {
            preguntas_aleatorias_indices.push(numero)
        }
    }
    

    for(i=0;i<preguntas_aleatorias_indices.length;i++){
        console.log(preguntas_aleatorias_indices[i])
        contenedor_preguntas.innerHTML = `
        <div class="card">
        <div class="card-body" id="pregunta1">
            <h5 class="card-title">Pregunta 1</h5>
            <p>¿Rerum lorem dldemsds kmsdkndsk sdmsd dsjnsdjn nemo neque voluptatem laboriosam alias
                itaque ducimus fugiat?</p>
            <section class="m-3" >
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault1"
                        id="pregunta1_opt1">
                    <label class="form-check-label" for="pregunta1_opt1">
                        Opción 1
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault1"
                        id="pregunta1_opt2">
                    <label class="form-check-label" for="pregunta1_opt2">
                        Opción 2
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault1"
                        id="pregunta1_opt3">
                    <label class="form-check-label" for="pregunta1_opt3">
                        Opción 3
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault1"
                        id="pregunta1_opt4">
                    <label class="form-check-label" for="pregunta1_opt4">
                        Opción 4
                    </label>
                </div>
            </section>
            <div id="retroalimentacion">

            </div>
            <div class="d-grid gap-2">
                <button class="btn btn-primary" onclick="pregunta(1)" type="button">Evaluar</button>
            </div>
        </div>
    </div>
        `;
    }

}

function aleatorio(a,b) {
    var aleatorio = Math.round(Math.random()*(b-a)+parseInt(a));
    return aleatorio
}

function crear_pregunta(){
    
}

preguntas_aleatorias();
