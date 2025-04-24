

// const getImagenPromesa = () => 
//     new Promise((resolve) => 
//         resolve('https://www.google.com'))
const getImagen = async() => {
try {
    const apikey= 'oz8hc9S0mjEd8o65TSuMJPy4ufvGSuqd';
    const resp = await fetch (`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
    const {data} = await resp.json();
    const {url} = data.images.original; // Desestructurando la url de la imagen



    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
} catch (error) {
    console.error(error)
}


}
getImagen();


