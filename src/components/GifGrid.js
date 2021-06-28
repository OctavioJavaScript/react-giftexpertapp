import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( {category} ) => {
    //Desestructuracion y renombramiento de variable
    const {data:images, loading} = useFetchGifs(category);
    
      

    return (
        //utilizaremos un fragment porque se retornan 2 objetos, solo puede retornar lo que 
        //este dentro de un div o fragment
        <>
        <h3>{ category }</h3>
        { loading && <p>Loading..</p>}
        <div className = "card-grid">
                { 
                //
                images.map( img => (
                    <GifGridItem 
                    key = {img.id   }
                    { ...img }/>
                    //asi se le mandan los parametros 
                ))
                }
        </div>
        </>
    )
}
