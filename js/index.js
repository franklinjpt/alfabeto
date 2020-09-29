let valorInput1 = [];
let valorInput2 = [];
let inputs = [];

function mostrarUnion(){
    const filtroUnion = ((el,index) => inputs.indexOf(el) === index);
    const union = inputs.filter(filtroUnion);
    return `{${union}}`;
}

function mostrarInterseccion(){
    const filtroInter = ((el,index) => inputs.indexOf(el) !== index);
    const interseccion = inputs.filter(filtroInter);
    return `{${interseccion}}`;
}

function mostrarDiferencia(){
    const filtroDiff = ((el) => !valorInput2.includes(el));
    const diferencia = valorInput1.filter(filtroDiff);
    return `{${diferencia}}`;
}