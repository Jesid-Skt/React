import { getSaludo } from '../../src/base-pruebas/02-template-string';
import { describe, test, expect } from '@jest/globals';


describe ('Pruebas en 02-template-string', () => {

    test('getSaludo debe de retornar "Hola <nombre>"', () => {
        const nombre = 'Fernando';
        const saludo = getSaludo(nombre);
        
        expect(saludo).toBe(`Hola ${ nombre }`);
    });

});