import React, { createContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../fbcongif"; 
export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const [user, setUser] = useState({}); 
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        //console.log(currentUser);
      });   
    const data = {user, setUser,onAuthStateChanged};
    return (
        <UserContext.Provider value={data}>
            {props.children}
        </UserContext.Provider>
    );
};