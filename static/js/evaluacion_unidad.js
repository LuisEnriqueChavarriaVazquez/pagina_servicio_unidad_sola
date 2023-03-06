function pregunta(numero){
    let respuestasId=[0,"pregunta1_opt3","pregunta2_opt4","pregunta3_opt2","pregunta4_opt3"]
    let respuestasExplicacion=[0,"Opcion 3","Opcion 4","Opción texto largo de ejemplo 2","Opción 3 de ejemplo"]
    let respuestaCorrectaId=respuestasId[numero]
    let contenedor=document.getElementById("pregunta"+String(numero))
    let retroalimentacion=contenedor.querySelector("#retroalimentacion")
    var respuestaAlumnoId=contenedor.querySelector("section>div>input:checked").id

    if (respuestaCorrectaId==respuestaAlumnoId){
        retroalimentacion.innerHTML="La respuesta es correcta"
    }else{
        retroalimentacion.innerHTML="Incorrecto, la respuesta era "+respuestasExplicacion[numero]
    }
}