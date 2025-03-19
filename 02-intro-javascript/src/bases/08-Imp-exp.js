//import { heroes } from './data/heroes';

import {heroes, owners} from '../data/heroes';
 

console.log(owners); // (2) ["DC", "Marvel"]


// const getHeroeById = (id) => {
//     return heroes.find((heroe) =>{
//         if (heroe.id === id) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// }

export const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
}
// console.log(heroes);
//console.log(getHeroeById(1)) // {id: 2, name: "Spiderman", owner: "Marvel"}

export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
//console.log(getHeroesByOwner('DC')) // (3) [{…}, {…}, {…}]
//console.log(getHeroesByOwner('Marvel')) // (2) [{…}, {…}]





