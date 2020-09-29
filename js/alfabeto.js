//Variables
const inputAlfabeto1 = document.querySelector('#alfabeto1');
const inputAlfabeto2 = document.querySelector('#alfabeto2');
const btnAlfabeto = document.querySelector('button[type="submit"]');
const formulario = document.querySelector('#formulario');
const mostrar1 = document.querySelector('.mostrarAlfabeto1');
const mostrar2 = document.querySelector('.mostrarAlfabeto2');
const aux = document.querySelector('.aux');
const enlaceUnion = document.querySelector('#union');
const enlaceInter = document.querySelector('#interseccion');
const enlaceDiff = document.querySelector('#diferencia');

//Listeners
cargarEventListeners();
function cargarEventListeners(){

    formulario.addEventListener('submit', leerAlfabeto);
}

//Funciones
function leerAlfabeto(e){
    e.preventDefault();
    
    valorInput1= inputAlfabeto1.value.split(",");
    valorInput2 = inputAlfabeto2.value.split(",");
    inputs = valorInput1.concat(valorInput2);

    mostrarAlfabeto();
    mostrarUnion();
    mostrarInterseccion();
    mostrarDiferencia();
}

function mostrarAlfabeto(){
    if(valorInput1 !== '' && valorInput2 !== ''){
        aux.remove();
        mostrar1.textContent = `A1: {${valorInput1}}`;
        mostrar2.textContent = `A2: {${valorInput2}}`;
        enlaceUnion.textContent = mostrarUnion();
        enlaceInter.textContent = mostrarInterseccion();
        enlaceDiff.textContent = mostrarDiferencia();
    }
}