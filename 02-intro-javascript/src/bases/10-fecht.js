const apikey= 'oz8hc9S0mjEd8o65TSuMJPy4ufvGSuqd';

const peticion = fetch (`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);

peticion
    .then(response => response.json())  
    .then(({data}) => {
        const {url} = data.images.original; // Desestructurando la url de la imagen
        
        const img = document.createElement('img'); // Creamos un elemento img
        img.src = url; // Asignamos la url a la propiedad src del elemento img
        document.body.append(img); // Agregamos el elemento img al body del documento
    })
    .catch(console.warn);

