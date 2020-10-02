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
let valorInput1 = [];
let valorInput2 = [];
let inputs = [];

//Listeners
cargarEventListeners();
function cargarEventListeners(){

    formulario.addEventListener('submit', leerAlfabeto);
}

//Funciones
function leerAlfabeto(e){
    e.preventDefault();
    if(inputAlfabeto1 === '' || inputAlfabeto2 === ''){
        alert('Un conjunto vacio no es un alfabeto');
        return false;
    }
    valorInput1 = inputAlfabeto1.value.split(",");
    valorInput2 = inputAlfabeto2.value.split(",");
    inputs = valorInput1.concat(valorInput2);
    inputAlfabeto1.value = '';
    inputAlfabeto2.value = ''; 

    mostrarAlfabeto();
}

function mostrarAlfabeto(){
        aux.remove();
        mostrar1.textContent = `A1: {${valorInput1}}`;
        mostrar2.textContent = `A2: {${valorInput2}}`;
        enlaceUnion.textContent = `{${mostrarUnion(inputs)}}`;
        enlaceInter.textContent = `{${mostrarInterseccion(inputs)}}`;
        enlaceDiff.textContent = `{${mostrarDiferencia(valorInput1,valorInput2)}}`;
}