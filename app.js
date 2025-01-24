
let numSec = 0;
let intentos = 0;
let listaNumAleatori = [];
let numeroMax = 10;

function asignarTextElement(elemento, texto) { //function para 
    let elementHtml = document.querySelector(elemento);
    elementHtml.innerHTML = texto;
}

function verificaIntento() {
    let numUser = parseInt(document.getElementById('valorUsuario').value);
    if (numUser == numSec) {
        asignarTextElement('p', `Felicitaciones, acerto en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`); // ${intentos === 1} ? 'intento':'intentos'`); esta es una validacion para tener dos opciones de palabra
        document.getElementById('reiniciar').removeAttribute('disabled');// de esta manera se activa un btn en JS
    } else if (numUser == '') {
        asignarTextElement('p', 'indica un numero del 1 al 10');
    } else {
        // el usuario no acerto
        if (numSec > numUser) {
            asignarTextElement('p', 'El numero secreto es mayor');
        } else {
            asignarTextElement('p', 'El numero secreto es menor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumSec() {
    let numGenerado = Math.floor(Math.random() * numeroMax) + 1;
    console.log(numGenerado);
    console.log(listaNumAleatori);
    if (listaNumAleatori.length == numeroMax) {
        asignarTextElement('p', 'Ya se usaron todos los numeros posibles');
    } else {
        // si el numero esta en la lista
        if (listaNumAleatori.includes(numGenerado)) {   //validar si el numerogenerado existe en la lista
            return generarNumSec();
        } else {
            listaNumAleatori.push(numGenerado);
            return numGenerado;
        }
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; //esta funcion limpia la caja de ingreso del numero
}

function condicionesIniciales() {
    asignarTextElement('h1', 'juego numero secreto!');
    asignarTextElement('p', `indica un numero del 1 al ${numeroMax}`);
    numSec = generarNumSec();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');//esta es la manera de desactivar un btn
}

condicionesIniciales();