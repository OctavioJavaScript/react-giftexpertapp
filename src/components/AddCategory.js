import React, {useState} from 'react'
import PropTypes from 'prop-types';

                        // (9836282) aqui recibimos como parametro el metodo para agregar
                        //categorias, definido y enviado desde GifExpertApp.js
export const AddCategory = ( {ponCategories} ) => {
    //useState: el primer elemento es el stack o contenido de los estados
    //          el segundo elemento es el método para interactuar con el stack (add/remove..)
    const [inputValue, setInputValue] = useState("");
           
    const handleInputChange = (e) => {
        setInputValue(e.target.value); //cuando presionemos una tecla, se agregará al texto del input
    }

    const handleSubmit = (e) => {
        if(inputValue.trim().length > 2){
            ponCategories( cats => [inputValue, ...cats] );
            //setCategories tiene como parametro propio su catalogo de categories, podemos 
            //reutilizarlo para jalar la informacion de su stack y en ella agregar 
            //el nuevo valor
            setInputValue("");
        }
        e.preventDefault(); //Este hace que al hacer submit no refresque toda la página
    }

    return (
        <form onSubmit = { handleSubmit }>
            <input
                type="text"
                value = { inputValue } //asignamos el valor que tendra al iniciar ("hola bro" desde useState)
                onChange = { handleInputChange }  
                /> 
        </form>
    )
}

    //Asi forzamos a que se envie el parametro, en caso de no hacerlo tira error
    //fue necesario importar el PropTypes
    //Se tiene que llamar igual que como lo mandamos desde GifExpertApp.js (9836282)
   AddCategory.propTypes = {
    ponCategories: PropTypes.func.isRequired
    }   
