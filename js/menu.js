$(document).ready(function() {
    
    if(localStorage.getItem("saldo")) {
        $("#saldo").text("$" + localStorage.getItem("saldo"));
    } else {
        localStorage.setItem("saldo", "0");
        $("#saldo").text("$0");
    }

});