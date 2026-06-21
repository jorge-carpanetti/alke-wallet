$(document).ready(function() {

    // Recuperamos la cadena de texto con los elementos <li> acumulados
    let historial = localStorage.getItem("movimientos");

    // Si está vacío o no existe, mostramos el mensaje por defecto
    if (!historial || historial.trim() === "") {
        $("#listaMovimientos").html(
            "<li class='list-group-item text-center text-muted'>No existen movimientos registrados</li>"
        );
    } else {
        // Si contiene datos, inyectamos directamente todo el bloque HTML acumulado
        $("#listaMovimientos").html(historial);
    }

});