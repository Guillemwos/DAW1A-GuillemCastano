let paro=true;
let titulo=true;
let edad=true;
function setParoTrue() {
    paro=true;
}
function setParoFalse() {
    paro=false;
}
function setTituloTrue() {
    titulo=true;
}
function setTituloFalse() {
    titulo=false;
}
function setEdadTrue() {
    edad=true;
}
function setEdadFalse() {
    edad=false;
}

function printarMensaje() {
    if (edad && titulo){
        alert("Recibes la beca");
    }
    else if (paro) {
        alert("Recibes la beca");
    }
    else alert("No recibes la beca")
    
}