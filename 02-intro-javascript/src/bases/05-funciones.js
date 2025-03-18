
// Funciones en JavaScript

const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

//console.log(saludar('Goku'));

console.log(saludar2('Vegeta'));
console.log(saludar3('goku'));
console.log(saludar);
console.log(saludar4());


const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'  
});

//const getUser = () => {
//    return {
//    uid: 'ABC123',
//    username: 'El_Papi1502'
//    }  
//};
//console.log(getUser());

const user = getUser();
console.log(user);


console.log(getUser());

// Tarea
// 1. Transformar a una función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas
const getUsuarioActivo = (nombre) => ({
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);






