const nombre = 'Fernando';
const apellido = 'Herrera';

// const nombrecomnpleto = nombre + ' ' + apellido;
const nombrecomnpleto = `
${nombre}
${apellido}
${1 + 1}
`;

console.log(nombrecomnpleto);


function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`); 