function printarMensaje() {
    let edad = document.getElementById("edad").value;
    let titulo = document.getElementById("titulo").value;
    let paro = document.getElementById("paro").value;

    if ((edad >= 18) && titulo == 's'){
        document.getElementById("mostrarDatos").innerHTML = "Enhorabuena, la beca es tuya.";
        //window.alert("Enhorabuena, la beca es tuya.")
    }
    else if (paro == 's'){
        document.getElementById("mostrarDatos").innerHTML = "Enhorabuena, la beca es tuya.";
        //window.alert("Enhorabuena, la beca es tuya.")
    }
    else {
        document.getElementById("mostrarDatos").innerHTML = "Lo sentimos, la beca no es tuya.";
        //window.alert("Lo sentimos, la beca no es tuya.")

    }

}