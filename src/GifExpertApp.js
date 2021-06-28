import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


//useState para agregar elementos a un arreglo
//asignar metodo a un boton
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Ranma'])

    const handleAdd = () => {
        setCategories( ['HunterXHunter', ...categories] );
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory ponCategories = { setCategories }/>
            {/* aqui estamos mandando el método para agregar categorias como prametro
            para que AddCategory lo pueda utilizar tambien, le pusimos como nombre ponCategorias 
            para que se vea quien lo llama (9836282)*/}
            <hr/>
            <button onClick= { handleAdd }>Agregar</button>
            <ol>
                {
                    categories.map( categoria => {
                        //erroresw en el video lo hacen sin return, si yo no pongo
                        //return no me deja.
                        return <GifGrid 
                                key = {categoria}
                                category = {categoria}/>
                        // return <li key={categoria}>{categoria}</li>
                    })
                }
            </ol>
        </>
    )
}
