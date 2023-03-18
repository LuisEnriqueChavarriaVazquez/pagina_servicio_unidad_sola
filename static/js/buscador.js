function buscar_concepto(){
    let criterio=document.getElementById('inputBrowser').value; 
    criterio=criterio.toLowerCase();
    let items=$('.conceptCard');
    var item;

    let fullContainer = document.getElementById('fullContainer');
    let contadorPalabras = 0;

    let cardContainer = $('.cardContainer');
    for(item=0; item <items.length; item++){
        if (!items[item].innerHTML.toLowerCase().includes(criterio)) {
            cardContainer[item].style.display="none";
        }
        else {
            cardContainer[item].style.display="grid";
            contadorPalabras = 1;          
        }
    }

    if(contadorPalabras == 0){
        fullContainer.innerHTML = `
        <section class="contenedormaterialDeApoyo">
            <p class="fs-1 fw-bold">No hay coincidencias</p>
            <div class="imagenDefaultContainer mt-3">
                <img class="imagenDefault" src="static/img/icons/no-Result.png">
            </div>
            <br>
            <div class="card" style="width: 100%;">
                <div class="card-body">
                    <div class="d-grid gap-2">
                        <a href="glosario.html" class="btn btn-secondary btn-lg">Reiniciar</a>
                    </div>
                </div>
            </div>
        </section>
        `;
    }

}