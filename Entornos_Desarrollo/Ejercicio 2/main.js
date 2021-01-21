function printarMensaje() {
    let n1 = document.getElementById("cajaTexto").value;
    let n2 = document.getElementById("cajaTexto2").value;
    let sum = parseInt(n1) + parseInt(n2);
    let res = n1 - n2;
    alert("El resultado de la suma es: " + sum);
    alert("El resultado de la resta es: " + res);
    alert("El resultado de la multiplicación es: " + n1 * n2);
    alert("El resultado de la división es: " + n1 / n2);    
    
    /*var num1, num2, sum;
    num1 = window.prompt("Enter number one");
    num2 = window.prompt("Enter number two");
    sum = parseInt(num1) + parseInt(num2);
    window.alert(num1 + "+" + num2 + "=" + sum);
    */
}