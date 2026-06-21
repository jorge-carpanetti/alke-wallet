$(document).ready(function() {

    let historial = localStorage.getItem("movimientos");

    if (!historial || historial.trim() === "") {
        $("#listaMovimientos").html(
            "<li class='list-group-item text-center text-muted'>No existen movimientos registrados</li>"
        );
    } else {
        $("#listaMovimientos").html(historial);
    }

});