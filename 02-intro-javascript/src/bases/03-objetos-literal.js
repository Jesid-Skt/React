

const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    direccion: {
        ciudad: 'Bogota',
        zip: 123456,
        lat: 14.3232,
        lng: 34.9233321
    }   
};


//console.table(persona);
console.log(persona); 

const persona2 = {...persona}; //clonar un objeto
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);
    
