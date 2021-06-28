

export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=x945rQOr6YW6ojeEKzs9RrxyqGJHGyfq&q=${ encodeURI(category)}&limit=3`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });
    return gifs;
    //Al ser una funcion async, lo que retornara es una PROMESA, no un arreglo.
}  