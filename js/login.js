$("#loginForm").submit(function(event){
    event.preventDefault();

    let usuario = $("#usuario").val();
    let password = $("#password").val();

    if(usuario === "alkeadmin" && password === "walletsegura") {
        window.location.href = "menu.html";
    } else {
        $("#mensaje").html(
            "<span class='text-danger'>Credenciales incorrectas</span>"
        );
    }
});