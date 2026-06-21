$(document).ready(function() {

    function formatearMoneda(monto) {
    return monto.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    function guardarMovimiento(descripcion) {
        let historialAnterior = localStorage.getItem("movimientos");
        
        if (!historialAnterior) {
            historialAnterior = "";
        }
        let nuevoHistorial = historialAnterior + "<li class='list-group-item text-danger'>" + descripcion + "</li>";
        localStorage.setItem("movimientos", nuevoHistorial);
    }

    $("#sendForm").submit(function(event) {
        event.preventDefault();

        let contacto = $("#contacto").val().trim();
        let monto = parseInt($("#montoEnviar").val());
        let saldo = parseInt(localStorage.getItem("saldo")) || 0;

        if (contacto === "") {
            $("#resultado").html(
                "<div class='alert alert-danger mt-3'>Por favor, ingrese un contacto destino</div>"
            );
            return;
        }

        if (isNaN(monto) || monto <= 0) {
            $("#resultado").html(
                "<div class='alert alert-danger mt-3'>Ingrese un monto válido mayor a 0</div>"
            );
            return;
        }

        if (monto > saldo) {
            $("#resultado").html(
                "<div class='alert alert-danger mt-3'>Saldo insuficiente para realizar la transferencia</div>"
            );
            return;
        }

        localStorage.setItem("saldo", saldo - monto);

        guardarMovimiento("Transferencia a " + contacto + ": -$ " + formatearMoneda(monto)+ " CLP");

        $("#resultado").html(
            "<div class='alert alert-success mt-3'> Transferencia por $ " + formatearMoneda(monto) + " CLP enviada a " + contacto + ". Redirigiendo al menú...</div>"
        );

        $("#sendForm")[0].reset();
        
        setTimeout(function() {
            window.location.href = "menu.html";
        }, 1500);
    });

});