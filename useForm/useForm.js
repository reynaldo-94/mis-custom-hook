import { useState } from "react"

// Declaro un objeto vacío
// Custo Hook que se va a encargar de manejar los formularios
export const useForm = ( initialState = {} ) => {

    const [values, setValues] = useState(initialState);

    // Cremo un nuevo metodo para resetear los campos del formulario
    const reset = () => {
        setValues( initialState )
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            // Estamos computando el target.name
            [ target.name ]: target.value
        })
    }

    return [ values, handleInputChange, reset];
    
}
