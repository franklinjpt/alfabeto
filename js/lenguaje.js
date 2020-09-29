//Variables
const inputLenguaje1 = document.querySelector('#lenguaje1');
const inputLenguaje2 = document.querySelector('#lenguaje2');
const btnLenguaje = document.querySelector('button[type="submit"]');
const formulario = document.querySelector('#formulario');
const mostrar1 = document.querySelector('.mostrarLenguaje1');
const mostrar2 = document.querySelector('.mostrarLenguaje2');
const aux = document.querySelector('.aux');
const enlaceUnion = document.querySelector('#union');
const enlaceInter = document.querySelector('#interseccion');
const enlaceDiff = document.querySelector('#diferencia');


//Listeners
cargarEventListeners();
function cargarEventListeners(){

    formulario.addEventListener('submit', leerLenguaje);
}

function leerLenguaje(e){
    e.preventDefault();
    
    valorInput1= inputLenguaje1.value.split(",");
    valorInput2 = inputLenguaje2.value.split(",");
    inputs = valorInput1.concat(valorInput2);

    mostrarLenguaje();
    mostrarUnion();
    mostrarInterseccion();
    mostrarDiferencia();
}

function mostrarLenguaje(){
    if(valorInput1 !== '' && valorInput2 !== ''){
        aux.remove();
        mostrar1.textContent = `L1: {${valorInput1}}`;
        mostrar2.textContent = `L2: {${valorInput2}}`;
        enlaceUnion.textContent = mostrarUnion();
        enlaceInter.textContent = mostrarInterseccion();
        enlaceDiff.textContent = mostrarDiferencia();
    }
}