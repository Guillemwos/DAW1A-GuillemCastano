function printarMensaje() {
    let edad = document.getElementById("cajaTexto").value;
    if (edad < 5){
        alert("pre-escolar");
    }
    else if (edad <= 11) {
        alert("primaria");
    }
    else if (edad <= 15) {
        alert("ESO");
    }
    else if (edad <= 18) {
        alert("Bachillerato");
    }
    else {
        alert("FP o Universidad");
    }

}