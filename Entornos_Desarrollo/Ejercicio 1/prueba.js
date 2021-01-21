function printarMensaje() {
    let mensaje = document.getElementById("cajaTexto").value;//Recoger valor de un input text

    document.getElementById("mostrarDatos").innerHTML = mensaje;//Dar valor por ejemplo a un párrafo
    document.getElementById("mostrarDatos").innerHTML = "Hola mundo, usando getElementById";
    document.write("Hola mundo usando document.write"); // no es muy común porque se carga toda la página.
    window.alert("Hola mundo usando window.alert()");
    alert(mensaje); // mostrará lo que hay almacenado en "mensaje"
    console.log("Hola mundo usando console.log()");
    console.log(mesaje); // mostrará lo que hay almacenado en "mensaje"
    window.print("Hola mundo usando window.print");//imprime físicamente
    print("Hola mundo usando print");//imprime físicamente

}
