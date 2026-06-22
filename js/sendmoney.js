$(document).ready(function() {

    function formatearMoneda(monto) {
        return monto.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    function cargarContactos() {
        let data = localStorage.getItem("contactos");
        let contactos = data ? data.split(",") : [];
        let $lista = $("#listaContactos");
        $lista.empty();
        if (contactos.length === 0 || (contactos.length === 1 && contactos[0] === "")) {
            $lista.append("<div class='list-group-item text-muted text-center'>No tienes contactos guardados</div>");
        } else {
            for (let i = 0; i < contactos.length; i++) {
                if (contactos[i] !== "") {
                    $lista.append("<button type='button' class='list-group-item list-group-item-action' data-contacto='" + contactos[i].replace(/'/g, "&#39;") + "'>" + contactos[i] + "</button>");
                }
            }
        }
    }

    function guardarMovimiento(descripcion) {
        let historial = localStorage.getItem("movimientos") || "";
        localStorage.setItem("movimientos", historial + "<li class='list-group-item text-danger'>" + descripcion + "</li>");
    }

    cargarContactos();

    $("#btnAgregarContacto").click(function() {
        let nombre = $("#nuevoContacto").val().trim();
        if (nombre === "") return;

        let data = localStorage.getItem("contactos");
        let contactos = data ? data.split(",") : [];

        let existe = false;
        for (let i = 0; i < contactos.length; i++) {
            if (contactos[i] === nombre) {
                existe = true;
                break;
            }
        }

        if (!existe) {
            if (contactos.length === 0 || (contactos.length === 1 && contactos[0] === "")) {
                localStorage.setItem("contactos", nombre);
            } else {
                contactos.push(nombre);
                localStorage.setItem("contactos", contactos.join(","));
            }
            $("#nuevoContacto").val("");
            cargarContactos();
            $("#resultado").html("<div class='alert alert-success mt-3'>Contacto \"" + nombre + "\" agregado a tu agenda</div>");
            setTimeout(function() { $("#resultado").html(""); }, 3000);
        } else {
            alert("El contacto ya existe en tu agenda");
        }
    });

    $(document).on("click", "#listaContactos button", function() {
        $("#contacto").val($(this).data("contacto"));
    });

    $("#contacto").on("input", function() {
        let input = $(this).val().toLowerCase().trim();
        let data = localStorage.getItem("contactos");
        let contactos = data ? data.split(",") : [];
        let sugerencias = [];

        for (let i = 0; i < contactos.length; i++) {
            if (contactos[i] !== "" && contactos[i].toLowerCase().includes(input)) {
                sugerencias.push(contactos[i]);
            }
        }

        if (sugerencias.length > 0 && input.length > 0) {
            let html = "";
            for (let i = 0; i < sugerencias.length; i++) {
                html += "<button type='button' class='list-group-item list-group-item-action' data-contacto='" + sugerencias[i].replace(/'/g, "&#39;") + "'>" + sugerencias[i] + "</button>";
            }
            $("#sugerencias").html(html).fadeIn(100);
        } else {
            $("#sugerencias").fadeOut(100);
        }
    });

    $(document).on("click", "#sugerencias button", function() {
        $("#contacto").val($(this).data("contacto"));
        $("#sugerencias").fadeOut(100);
    });

    $(document).on("click", function(e) {
        if (!$(e.target).closest("#contacto, #sugerencias").length) {
            $("#sugerencias").fadeOut(100);
        }
    });

    $("#sendForm").submit(function(event) {
        event.preventDefault();

        let contacto = $("#contacto").val().trim();
        let monto = parseInt($("#montoEnviar").val());
        let saldo = parseInt(localStorage.getItem("saldo")) || 0;

        if (contacto === "") {
            $("#resultado").html("<div class='alert alert-danger mt-3'>Por favor, ingrese un contacto destino</div>");
            return;
        }

        let data = localStorage.getItem("contactos");
        let contactosGuardados = data ? data.split(",") : [];
        let encontrado = false;
        for (let i = 0; i < contactosGuardados.length; i++) {
            if (contactosGuardados[i] === contacto) {
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            $("#resultado").html("<div class='alert alert-danger mt-3'>El contacto no está en tu agenda. Agrégalo primero.</div>");
            return;
        }

        if (isNaN(monto) || monto <= 0) {
            $("#resultado").html("<div class='alert alert-danger mt-3'>Ingrese un monto válido mayor a 0</div>");
            return;
        }

        if (monto > saldo) {
            $("#resultado").html("<div class='alert alert-danger mt-3'>Saldo insuficiente para realizar la transferencia</div>");
            return;
        }

        localStorage.setItem("saldo", saldo - monto);

        guardarMovimiento("Transferencia a " + contacto + ": -$ " + formatearMoneda(monto) + " CLP");

        $("#resultado").html("<div class='alert alert-success mt-3'>Transferencia por $ " + formatearMoneda(monto) + " CLP enviada a " + contacto + ". Redirigiendo al menú...</div>");

        $("#sendForm")[0].reset();

        setTimeout(function() {
            window.location.href = "menu.html";
        }, 1500);
    });

});
