const inputPalabra = document.querySelector('#palabra');
const btnLenguaje = document.querySelector('button[type="submit"]');
const mostrar = document.querySelector('.mostrarPalabra');
const formulario = document.querySelector('#formulario');
const aux = document.querySelector('.aux');
const enlaceInver = document.querySelector('#inverso');
const enlaceCardi = document.querySelector('#cardinalidad');

cargarEventListeners();
function cargarEventListeners(){

    formulario.addEventListener('submit', leerPalabra);
}

function leerPalabra(e){
    e.preventDefault();
    valorInput = inputPalabra.value;
    inputPalabra.value = '';
    mostrarPalabra();
}

function mostrarPalabra(){
        aux.remove();
        mostrar.textContent = `P1 = ${valorInput}`
        enlaceInver.textContent = inversoString(valorInput).join("").toLowerCase();
        enlaceCardi.textContent = cardinalidad(valorInput);
}