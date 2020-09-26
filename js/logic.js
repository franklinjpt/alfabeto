//Variables
const inputAlfabeto = document.querySelector('#alfabeto');
const btnAlfabeto = document.querySelector('button[type="submit"]');
const formulario = document.querySelector('#formulario');
 


//Listeners
cargarEventListeners();
function cargarEventListeners(){

    formulario.addEventListener('submit', leerAlfabeto);
}




//Funciones
function leerAlfabeto(e){
    e.preventDefault();
    let alfabetoLeido = alfabeto.value;
    if(alfabetoLeido === ''){
        alert('El formulario no puede estar vacio')
    }else{
        //Falta que se agregue otro alfabeto
        let nuevoalfabeto = [];
        nuevoalfabeto = alfabetoLeido.split(",");
        localStorage.setItem('alfabeto', JSON.stringify(nuevoalfabeto));

    }
    inputAlfabeto.value = '';
}