import React, {createContext} from "react";

export const Context = createContext([{nombre:'pepe'}, {nombre:'rama'}]);

export const CustomProvider = ({children}) => {
    return(
        <>
        {children}
        </>
    )
}