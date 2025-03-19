const personajes = ['Goku', 'Vegeta', 'Trunks'];
//console.log(personajes[0]); // Goku
const [, , p3] = personajes;
console.log(p3); // Goku


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [, numeros] = retornaArreglo();
console.log(numeros); 

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre

const useState = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }];
}   

// eslint-disable-next-line react-hooks/rules-of-hooks
const [nombre , setNombre] = useState('Goku');
console.log(nombre); // ['Goku', f]
setNombre(); // Hola Mundo
