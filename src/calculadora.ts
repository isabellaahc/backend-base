function operar(operacion: string, a: number, b: number) {
    if (operacion === 'suma') {
        return suma(a, b);
    } else if (operacion === 'resta') {
        return restar(a, b);
    } else if (operacion === 'multiplicacion') {
        return multiplicar(a, b);
    } else if (operacion === 'division') {
        return dividir(a, b);
    }else if (operacion === 'potencia') {
        return potencia(a, b); 
    }else if (operacion === 'factorial') {
        return factorial(a); 
    }    
}

function suma(a: number, b: number) {
    validacion(a, b, 'suma');
    return a + b;
}

function restar(a: number, b: number) {
    validacion(a, b, 'restar');
    return a - b;
}

function multiplicar(a: number, b:number) {
    validacion(a, b, 'multiplicar');
    return a * b;
}

function dividir(a: number, b:number) {
    validacion(a, b, 'dividir');
    return a * b;
}

function potencia(a: number, b:number) {
    validacion(a, b, 'potenciar');
    return a ** b;
}

function factorial(a: number) {

    validacionFactorial(a);

    if (a === 0) {
        return 1;
    } else {
        let resultado : number = a * factorial(a - 1);
        return resultado;
    }
}

function validacion(a: number, b: number, operacion: string) {
    if (a === undefined || b === undefined) {
        console.log("retornando throw")
        throw new Error("No se pueden " + operacion + " indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
}

function validacionFactorial(a: number) {
    if (a === undefined) {
        throw new Error("No es posible realizar factorial de indefinidos");
    }

    if (typeof a !== 'number') {
        return NaN;
    }
}

export { suma, operar, restar, multiplicar, dividir, potencia, factorial };