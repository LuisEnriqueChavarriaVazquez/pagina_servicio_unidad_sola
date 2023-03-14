let contenedorNotificaciones = document.getElementById('contenedorNotificaciones');
document.addEventListener("selectstart", () => {
    contenedorNotificaciones.innerHTML = `
        <div id="notificacionMine">
            No está permitido copiar contenido.
        </div>
    `;

    setTimeout(() => {
        $("#notificacionMine").fadeOut("slow");
    }, 2000);

});