import React, { createContext, useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../config/Config';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem('email'));

    const signIn = () => {
        try {
            signInWithPopup(auth, provider).then(data => {
                localStorage.setItem('email', data.user.email);
                setUser(data.user.email);
            });
        } catch (error) {
            console.log(error)
        }
    }

    const value = { user, signIn }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}
