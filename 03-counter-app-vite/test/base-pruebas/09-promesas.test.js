import { describe, test, expect } from '@jest/globals';
import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas'; // Adjust the path as needed

describe('prueba en 09-promesas', () => {

    test('getHeroeByIdAsync debe retornar un héroe async', ( done ) => {
        
        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => { 
                expect( hero ).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done(); 
                });  
        })
    test('getHeroeByIdAsync debe retornar un erros si el heroe no existe', ( done ) => {
        const id = 100;
        getHeroeByIdAsync( id )
            .catch ( error => { 
                expect( error ).toBe(`No se pudo encontrar el héroe: ${id}`);
                done(); 
            });
    });

});