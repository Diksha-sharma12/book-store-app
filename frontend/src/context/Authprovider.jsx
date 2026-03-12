import React ,{ Children, createContext, useContext, useState }from 'react';

export const AuthContext=createContext()
export default function Authprovider({children}){
    const initailAuth=localStorage.getItem("Users");
    const [authUser,setauthUser]=useState(
        initailAuth?JSON.parse(initailAuth):undefined
    )
    return(
        <AuthContext.Provider value={[authUser,setauthUser]}>
            {children}
        </ AuthContext.Provider>
    )
};
export const useAuth=()=>useContext(AuthContext);
