// Desesctructuración de objetos
// Asignación de Destructuración

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    profecion: 'Ing. en Sistemas'
};

const { nombre, edad, clave } = persona;

console.table(nombre, edad, clave);
console.log(nombre);
console.log(edad);
console.log(clave);

const UseContext = ( {nombre, edad, profecion} ) => ({
    //console.log(nombre , edad, clave, profecion);
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
});

//retornaPersona(nombre, edad, clave);
const { nombreClave, anios, latlng:{lat, lng}} = UseContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
console.log(UseContext(persona));


 
