import React, {useState, useContext, useEffect} from "react";


const AppContext = React.createContext()

export const AppProvider = ({children}) => {
    const heloo = 'heloo'

    return (
        <AppContext.Provider value={{heloo}}>{children}</AppContext.Provider>
    )

}



export const useGlobalContext = () => {
    return useContext(AppContext)
}