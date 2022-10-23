import React, { useState } from "react";


export const AuthContext = React.createContext({})


export const AuthProvider = (props) => {

    const [user, setUser] = useState(
        {token:''}
    )

    const [porc, setPorc] = useState(
        {total:0,
         check:0}
    )
    
    return (
        <AuthContext.Provider value={{ user, setUser, porc, setPorc}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => React.useContext(AuthContext)