function printarMensaje() {
    let puertas = document.getElementById("cajaTexto").value;
    if (puertas == 3){
        alert("El coche es deportivo");
    }
    else if (puertas == 5) {
        alert("El coche es familiar");
    }
    else {
        alert("Seguro que el coche tiene " + puertas + " puertas?");
    }

}