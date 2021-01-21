function printarMensaje() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let result;

    switch (operator){
        case '+':
            result = num1 + num2;
            document.getElementById("mostrarDatos").innerHTML = "El resultado de la operación es " + result;
            break;
        case '-':
            result = num1-num2;
            document.getElementById("mostrarDatos").innerHTML = "El resultado de la operación es " + result;
            break;
        case '*':
            result = num1*num2;
            document.getElementById("mostrarDatos").innerHTML = "El resultado de la operación es " + result;
            break;
        case '/':
            result = num1/num2;
            document.getElementById("mostrarDatos").innerHTML = "El resultado de la operación es " + result;
            break;
        default:
        document.getElementById("mostrarDatos").innerHTML = "No has introducido una operación válida";

    }
}