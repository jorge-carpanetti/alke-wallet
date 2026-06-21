$(document).ready(function() {

    function guardarMovimiento(descripcion) {
        let historialAnterior = localStorage.getItem("movimientos");
        
        if (!historialAnterior) {
            historialAnterior = "";
        }
        let nuevoHistorial = historialAnterior + "<li class='list-group-item'>" + descripcion + "</li>";
        localStorage.setItem("movimientos", nuevoHistorial);
    }

    $("#depositForm").submit(function(event) {
        event.preventDefault();

        let monto = parseInt($("#monto").val());
        let saldo = parseInt(localStorage.getItem("saldo")) || 0;
        
        if (isNaN(monto) || monto <= 0) {
            $("#mensajeDeposito").html(
                "<div class='alert alert-danger mt-3'>Ingrese un monto válido mayor a 0</div>"
            );
            return;
        }

        localStorage.setItem("saldo", saldo + monto);

        guardarMovimiento("Depósito: +$CLP " + monto);

        $("#mensajeDeposito").html(
            "<div class='alert alert-success mt-3'> Depósito por $ " + monto + " CLP realizado. Redirigiendo al menú...</div>");

        $("#depositForm")[0].reset();
        
        setTimeout(function() {
            window.location.href = "menu.html";
        }, 1500);
    });

});