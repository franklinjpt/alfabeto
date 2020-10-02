function mostrarUnion(a){
    const filtroUnion = ((el,index) => a.indexOf(el) === index);
    const union = a.filter(filtroUnion);
    return union;
}

function mostrarInterseccion(a){
    const filtroInter = ((el,index) => a.indexOf(el) !== index);
    const interseccion = a.filter(filtroInter);
    return interseccion;
}

function mostrarDiferencia(a,b){
    const filtroDiff = ((el) => !b.includes(el));
    const diferencia = a.filter(filtroDiff);
    return diferencia;
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

function potencia(objIngre ,nPotencia) {
    let lgPotencia = [...objIngre];
    if(nPotencia === -1){
        return lgPotencia = [];
    }
    for (let i = 0; i < nPotencia; i++) {
      lgPotencia = concatenacion(lgPotencia, objIngre);
    }
    return lgPotencia;
}

function inversoString(valor){
    let inverso = [...valor];
    inverso.reverse();
    return inverso;
}

let inversoArray = (valor) => {
    let objetoInver = valor.map(function(el){
        return el.split('').reverse().join('');
    })
    return objetoInver;
}

let cardinalidad = (valor) => valor.length;



