
import { createContext, useState } from "react";

/**
 * Context
 */
export const PersonajesContext = createContext();

/**
 * Provider
 */

export function PersonajesProvider({children}){
    const [personajes,setPersonajes] = useState([]);

    const providerValue={
        personajes,
        setPersonajes
    }

    return(
        <PersonajesContext.Provider value={providerValue}>
            {children}
        </PersonajesContext.Provider>
    )

}
