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
    }
}

function suma(a: number, b: number) {
    validacion(a, b, 'sumar');
    
    if (isNaN(a) || isNaN(b)) {
        return NaN;
    }
    
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
    return a / b;
}

function potencia(a: number, b:number) {
    validacion(a, b, 'potenciar');
    return a ** b;
}

function factorial(a: number, acumulador: number = 1): number {
    validacionFactorial(a);
    if (a === 0) return acumulador;
    return factorial(a - 1, acumulador * a);
}

function validacion(a: number, b: number, operacion: string) {
    if (a === undefined || b === undefined) {
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

    if (typeof a !== 'number' || isNaN(a)) {
        throw new Error("El valor ingresado no es un número");
    }

    if (a < 0) {
        throw new Error("No es posible realizar factorial de un número negativo");
    }
}

export { suma, operar, restar, multiplicar, dividir, potencia, factorial, validacion, validacionFactorial };