import { useState } from "react"


export const useInput = (defaultValue,validationFn)=>{

    const [enteredValue,setEnteredValue] = useState(defaultValue);
    const [didEdit,setDidEdit] = useState(false);
    // const [hasError,setHasError] = useState(false);


    const handleOnValueBlur = ()=>{
        setDidEdit(true);
    }
    const handleOnValueChange = (event)=>{
        setEnteredValue(event.target.value);
    }
    let hasError = false;
    if(didEdit){

         hasError= validationFn(enteredValue)
    }

    return {
        enteredValue,
        hasError,
        didEdit,
        setEnteredValue,
        handleOnValueBlur,
        handleOnValueChange
    }
}