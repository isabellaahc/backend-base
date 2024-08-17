import { describe, test, expect } from "@jest/globals";
import { restar, suma, operar, multiplicar, dividir, potencia, factorial, validacion, validacionFactorial} from "../src/calculadora.js";
import app from "../src/server.js";
import request from "supertest";

describe("Calculadora", () => {

    test("sumar dos numeros", () => {

        let a: any = 100;
        let b: any = 200;
        expect(suma(a, b)).toBe(300);

        a = 10;
        b = "a";
        expect(suma(a, b)).toBeNaN();

        a = undefined;
        b = 1;
        expect(() => { suma(a, b) }).toThrow("No se pueden sumar indefinidos");

    });

    test("operar dos numeros", () => {

        let a: any = 100;
        let b: any = 200;
        expect(operar("resta", b, a)).toBe(100);
        expect(operar("suma", b, a)).toBe(300);
        expect(operar("multiplicacion", b, a)).toBe(20000);
        expect(operar("division", b, a)).toBe(2);

        a = 10;
        b = "a";
        expect(operar("suma", a, b)).toBeNaN();
        expect(operar("resta", a, b)).toBeNaN();
        expect(operar("multiplicacion", a, b)).toBeNaN();
        expect(operar("division", a, b)).toBeNaN();
        expect(operar("potencia", a, b)).toBeNaN();

        a = undefined;
        b = 1;
        expect(() => { operar("suma", a, b) }).toThrow("No se pueden sumar indefinidos");
        expect(() => { operar("resta", a, b) }).toThrow("No se pueden restar indefinidos");
        expect(() => { operar("multiplicacion", a, b) }).toThrow("No se pueden multiplicar indefinidos");
        expect(() => { operar("division", a, b) }).toThrow("No se pueden dividir indefinidos");
        expect(() => { operar("potencia", a, b) }).toThrow("No se pueden potenciar indefinidos");
    

    });

    test("restar dos numeros", () => {

        let a: any = 100;
        let b: any = 200;
        expect(restar(b, a)).toBe(100);

        a = 10;
        b = "a";
        expect(restar(a, b)).toBeNaN();

        a = undefined;
        b = 1;
        expect(() => { restar(a, b) }).toThrow("No se pueden restar indefinidos");
    });

    test("multiplicar dos numeros", () => {

        let a: any = 5;
        let b: any = 2;
        expect(multiplicar(b, a)).toBe(10);

        a = 5;
        b = "a";
        expect(multiplicar(a, b)).toBeNaN();

        a = undefined;
        b = 1;
        expect(() => { multiplicar(a, b) }).toThrow("No se pueden multiplicar indefinidos");
    });

    test("dividir dos numeros", () => {

        let a: any = 10;
        let b: any = 2;
        expect(dividir(a, b)).toBe(5);

        a = 5;
        b = "a";
        expect(dividir(a, b)).toBeNaN();

        a = undefined;
        b = 1;
        expect(() => { dividir(a, b) }).toThrow("No se pueden dividir indefinidos");
    });

    test("calcular potencia", () => {

        let a: any = 2;
        let b: any = 4;
        expect(potencia(a, b)).toBe(16);

        a = 5;
        b = "a";
        expect(potencia(a, b)).toBeNaN();

        a = undefined;
        b = 1;
        expect(() => { potencia(a, b) }).toThrow("No se pueden potenciar indefinidos");
    });

    test("calcular factorial", () => {

        let a: any = 2;
        expect(factorial(a)).toBe(2);

        a = "a";
        expect(() => { factorial(a) }).toThrow("El valor ingresado no es un número");

        a = undefined;
        expect(() => { factorial(a) }).toThrow("No es posible realizar factorial de indefinidos");

        a = -100;
        expect(() => { factorial(a) }).toThrow("No es posible realizar factorial de un número negativo");
    });

    test("test funcion validadora", () => {
        let a: any = 100;
        let b: any = undefined;
        expect(() => { validacion(a, b, "sumar") }).toThrow("No se pueden sumar indefinidos");
        expect(() => { validacion(a, b, "restar") }).toThrow("No se pueden restar indefinidos");
        expect(() => { validacion(a, b, "multiplicar") }).toThrow("No se pueden multiplicar indefinidos");
        expect(() => { validacion(a, b, "dividir") }).toThrow("No se pueden dividir indefinidos");

        a = 10;
        b = "a";
        expect(validacion(a, b, "sumar")).toBeNaN();
        expect(validacion(a, b, "restar")).toBeNaN();
        expect(validacion(a, b, "multiplicar")).toBeNaN();
        expect(validacion(a, b, "dividir")).toBeNaN();

        
    });


    test("test de endpoint /", async () => {
        return await request(app)
            .get("/")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe("Hola mundo al usuario cmd");
            })
    });

    test("test de endpoint operar", async () => {
        return await request(app)
            .get("/operar?a=30&b=30&oper=suma")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe("el resultado de la operacion suma de 30 y 30 es 60");
            })
    });

    test("test de endpoint factorial", async () => {
        return await request(app)
            .get("/factorial?a=2")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe("el resultado del factorial de 2 es 2");
            })
    });

});