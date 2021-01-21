function printarMensaje() {
    let mes = parseInt(document.getElementById("mes").value);
    switch (mes){
        case 1: 
        document.getElementById("mostrarDatos").innerHTML = "El mes de Enero tiene 31 días";
        break;
        case 2:
        document.getElementById("mostrarDatos").innerHTML = "El mes de Febrero tiene 28 días";
        break;
        case 3:
        document.getElementById("mostrarDatos").innerHTML = "El mes de Marzo tiene 31 días";
        break;
        case 4: 
        document.getElementById("mostrarDatos").innerHTML = "El mes de Abril tiene 30 días";
        break;
        case 5:
        document.getElementById("mostrarDatos").innerHTML = "El mes de Mayo tiene 31 días";
        break;
        case 6:
        document.getElementById("mostrarDatos").innerHTML = "El mes de Junio tiene 30 días";
        break;
        case 7:
        document.getElementById("mostrarDatos").innerHTML = "El mes de Julio tiene 31 días";
        break;
        case 8:
        document.getElementById("mostrarDatos").innerHTML = "El mes de Agosto tiene 31 días";
        break;
        case 9:
        document.getElementById("mostrarDatos").innerHTML = "El mes de Septiembre tiene 30 días";
        break;
        case 10:
        document.getElementById("mostrarDatos").innerHTML = "El mes de Octubre tiene 31 días";
        break;
        case 11:
        document.getElementById("mostrarDatos").innerHTML = "El mes de Noviembre tiene 30 días";
        break;
        case 12:  
        document.getElementById("mostrarDatos").innerHTML = "El mes de Diciembre tiene 31 días";
        break;
        default:
        document.getElementById("mostrarDatos").innerHTML = "No has introducido un mes válido";

    }
}