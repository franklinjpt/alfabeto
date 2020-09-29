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

let valorAlfabeto1 = [];
let valorAlfabeto2 = [];
let alfabetos = [];

//Listeners
cargarEventListeners();
function cargarEventListeners(){

    formulario.addEventListener('submit', leerAlfabeto);
}

//Funciones
function leerAlfabeto(e){
    e.preventDefault();
    
    valorAlfabeto1 = inputAlfabeto1.value.split(",");
    valorAlfabeto2 = inputAlfabeto2.value.split(",");
    alfabetos = valorAlfabeto1.concat(valorAlfabeto2);

    mostrarAlfabeto();
    mostrarUnion();
    mostrarInterseccion();
    mostrarDiferencia();

}

function mostrarAlfabeto(){
    if(valorAlfabeto1 !== '' && valorAlfabeto2 !== ''){
        aux.remove();
        mostrar1.textContent = `A1: {${valorAlfabeto1}}`;
        mostrar2.textContent = `A2: {${valorAlfabeto2}}`;
    }
}

function mostrarUnion(){
    const filtroUnion = ((el,index) => alfabetos.indexOf(el) === index);
    const unionAlfabetos = alfabetos.filter(filtroUnion);
    enlaceUnion.textContent = `{${unionAlfabetos}}`;
}

function mostrarInterseccion(){
    const filtroInter = ((el,index) => alfabetos.indexOf(el) !== index);
    const interseccionAlfa = alfabetos.filter(filtroInter);
    enlaceInter.textContent = `{${interseccionAlfa}}`;
}

function mostrarDiferencia(){
    const filtroDiff = ((el) => !valorAlfabeto2.includes(el));
    const diferenciaAlfa = valorAlfabeto1.filter(filtroDiff);
    enlaceDiff.textContent = `{${diferenciaAlfa}}`;
}

