import React from "react";
import { createContext , useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider(props){
    const [dark , setDark]=useState(false);
    const ToggleDarkMode = ()=>{ setDark(!dark)}
    let valuesDark ={dark , ToggleDarkMode};
    return(

        <div>

            <DarkModeContext.Provider value={valuesDark}>
                {props.children}
            </DarkModeContext.Provider>
        </div>
    )
};