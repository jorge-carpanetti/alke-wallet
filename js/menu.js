$(document).ready(function() {
    
    if(localStorage.getItem("saldo")) {
        $("#saldo").text("$ " + localStorage.getItem("saldo")+ " CLP");
    } else {
        localStorage.setItem("saldo", "0");
        $("#saldo").text("$CLP 0");
    }

});