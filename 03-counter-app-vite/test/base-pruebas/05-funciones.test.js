import { getUser, getUsuarioActivo} from '../../src/base-pruebas/05-funciones';
import { describe, test, expect } from '@jest/globals';

describe('Pruebas en 05-funciones', () => {
     
    test('getUser debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser(); 

        expect( userTest ).toEqual( user );    
        console.log(user);
    
    });

     test('getusuario duty return a object', () => {
        const nombre = 'Fernando';
        const user = getUsuarioActivo( nombre );

        expect( user ).toStrictEqual({
            uid: 'ABC567',
            username: nombre
     });
     });
});
     