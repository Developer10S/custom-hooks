import { useState } from "react"

//hook --- puede retornar lo que sea
//si el valor no viene coloca 10
export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(
        initialValue
    )

        //exponer funciones para poder cambiar el valor
        const increment=(value=1)=>{
            console.log("entrados ");
            setCounter((current)=>current+value);
        }

        const disminuir=(value=1)=>{
            console.log("---- ");
            setCounter((current)=>current-value);
        }
        const reset=()=>{
            console.log("---- ");
            setCounter(initialValue);
        }

    return {
        counter,
        increment,
        disminuir,
        reset
        
    }
}