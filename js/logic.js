//Variables
const inputAlfabeto1 = document.querySelector('#alfabeto1');
const inputAlfabeto2 = document.querySelector('#alfabeto2');
const btnAlfabeto = document.querySelector('button[type="submit"]');
const formulario = document.querySelector('#formulario');
const mostrar1 = document.querySelector('.mostrarAlfabeto1');
const mostrar2 = document.querySelector('.mostrarAlfabeto2');
const aux = document.querySelector('.aux');
const enlaceUnion = document.querySelector('#union');
const enlaceInter = document.querySelector('#interseccion')

let valorAlfabeto1 = null;
let valorAlfabeto2 = null;



//Listeners
cargarEventListeners();
mostrarAlfabeto();
function cargarEventListeners(){

    formulario.addEventListener('submit', leerAlfabeto);
}

//Funciones
function leerAlfabeto(e){
    e.preventDefault();
    let alfabeto1 = inputAlfabeto1.value;
    let alfabeto2 = inputAlfabeto2.value;

    if(alfabeto1 === '' && alfabeto2 === ''){
        alert('El formulario no puede estar vacio')
    }else{
        let nuevoalfabeto1,nuevoalfabeto2 = [];
        nuevoalfabeto1 = alfabeto1.split(",");
        nuevoalfabeto2 = alfabeto2.split(",");
        localStorage.setItem('alfabeto1', JSON.stringify(nuevoalfabeto1));
        localStorage.setItem('alfabeto2', JSON.stringify(nuevoalfabeto2));
        valorAlfabeto1 = JSON.parse(localStorage.getItem('alfabeto1'));
        valorAlfabeto2 = JSON.parse(localStorage.getItem('alfabeto2'));

        mostrarAlfabeto();
        mostrarUnion();
        mostrarInterseccion();
    }
    inputAlfabeto1.value = '';
    inputAlfabeto2.value = '';
}

function mostrarAlfabeto(){

    if(valorAlfabeto1 !== null && valorAlfabeto2 !== null){
        aux.remove();
        mostrar1.textContent = `A1: { ${valorAlfabeto1}} `;
        mostrar2.textContent = `A2: {${valorAlfabeto2}}`;

    }
}

function mostrarUnion(){
    const alfabetosPegados = valorAlfabeto1.concat(valorAlfabeto2);
    const filtroUnion = ((el,index) => alfabetosPegados.indexOf(el) === index);
    const unionAlfabetos = alfabetosPegados.filter(filtroUnion);
    enlaceUnion.textContent = `{${unionAlfabetos}}`;
}

function mostrarInterseccion(){
    const alfabetosInter = valorAlfabeto1.concat(valorAlfabeto2);
    const filtroInter = ((el,index) => alfabetosInter.indexOf(el) !== index);
    const interseccionAlfa = alfabetosInter.filter(filtroInter);
    enlaceInter.textContent = `{${interseccionAlfa}}`;
}


