import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({ children }) => {

    const [user, setUser] = useState(null)

    const createUser = (email, passWord) => {
        return createUserWithEmailAndPassword(auth, email, passWord)
    }

    const signIn = (email, passWord) => {
        return signInWithEmailAndPassword(auth, email, passWord)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user inside state change', currentUser)
            setUser(currentUser)
        })
        return () => unSubscribe()
    }, [])

    const authInfo = { user, createUser, signIn, logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;