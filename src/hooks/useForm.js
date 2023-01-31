import { useState } from "react"

//Se encarga de manejar los formularios 
const useForm = (intialState={}) => {
  
    const [value, setValue] = useState(intialState)

    const reset=()=>{
        setValue(intialState);
    }

    const handleInputChange=({target})=>{
        //Targetname como llave para obtener el valor
        setValue({
            ...value,
            [target.name]: target.value
        })
    }


    return[ value, handleInputChange,reset];
}

export default useForm