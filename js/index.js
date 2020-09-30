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

function concatenacion(valor1, valor2){
    let concatenacion = [];
    for(let i=0; i<valor1.length; i++){
        let a = valor1[i];
        for(let j=0; j<valor2.length; j++){
            let b = valor2[j];
            (a === '!' ? concatenacion.push(b) : b === '!' ? concatenacion.push(a) : concatenacion.push(`${a + b}`) );
        }
    }
    return concatenacion;
}

function potencia(otra ,nPotencia) {
    let lgPotencia = [...otra];
    console.log(nPotencia);
    for (let i = 0; i < nPotencia; i++) {
      lgPotencia = concatenacion(lgPotencia, otra);
    }
    return lgPotencia;
  }



