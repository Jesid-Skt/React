
import {getHeroeById} from './bases/08-Imp-exp';
//import { heroes } from './data/heroes';

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(2);
//     resolve(heroe);
//   }, 2000)
// });

// promesa.then((heroe) => {
//   console.log('Heroe:', heroe);
// });

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const p1 = getHeroeById( id );
            if ( p1 ) {
                resolve( p1 );
            }
            else {
                reject( 'Heroe no encontrado' );
            }   
        }, 1000)
    });
}
getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);

