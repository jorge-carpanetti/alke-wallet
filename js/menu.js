$(document).ready(function() {
    
    function formatearMoneda(saldo) {
    return saldo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    let saldo = localStorage.getItem("saldo");

    if(saldo) {
        $("#saldo").text("$ " + formatearMoneda(saldo)+ " CLP");
    } else {
        localStorage.setItem("saldo", "0");
        $("#saldo").text("$CLP 0");
    }

});