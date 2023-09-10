import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from '../../firebase/firebase.config';



export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    // {creat user fist}
    const creatEmailUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // { after creating user signin user }

    const signInEmailUser = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    // { logout Authintication }

    const logOut = () => {
        signOut(auth)
    }

    // observer user auth state
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
             setUser(currentUser)
        } )

        // stop observing while unmounting
        return ()=>{
            return unsubscribe()
        }

    }
        ,[])


    const authInfo = {
        user,
        creatEmailUser,
        signInEmailUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;