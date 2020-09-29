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

function concatenacion(){
    let prueba = [];
    for(let i=0; i<valorInput1.length; i++){
        let a = valorInput1[i];
        //a = aaa
        for(let j=0; j<valorInput2.length; j++){
            let b = valorInput2[j];
            //b = bbb
            (a === '!' ? prueba.push(b) : b === '!' ? prueba.push(a) : prueba.push(`${a+b}`) );
        }
    }
    return `{${prueba}}`;
}