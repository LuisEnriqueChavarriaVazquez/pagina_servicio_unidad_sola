let containerLista = document.getElementsByClassName('cardsPaginaContenidoList');
let containerListaArr = [...containerLista];
let botonFlotante2 = document.getElementById('botonFlotante2');
let botonFlotanteIcon2 = document.getElementById('botonFlotanteIcon2');

let viewState = "list";

botonFlotante2.addEventListener('click', () => {
    if(viewState == "list"){        
        containerListaArr.forEach(e => {
            e.classList.remove('cardsPaginaContenidoList');
            e.classList.add('cardsPaginaContenidoGrid');
        });
        botonFlotanteIcon2.classList.remove('bi-view-list');
        botonFlotanteIcon2.classList.add('bi-grid');
        viewState = "grid";
    }else{
        containerListaArr.forEach(e => {
            e.classList.add('cardsPaginaContenidoList');
            e.classList.remove('cardsPaginaContenidoGrid');
        });
        botonFlotanteIcon2.classList.add('bi-view-list');
        botonFlotanteIcon2.classList.remove('bi-grid');
        viewState = "list";
    }
});