import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/Firebase.config';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateName = (name) => {
        return updateProfile(auth.currentUser, name)
    }
    const handleGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const handleFacebook = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }
    const Logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const handleResetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }


    const unsubscribe = useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.displayName) {
                setUser(currentUser)
                setLoading(false)
            }
        })
        return () => unsubscribe;
    }, [])

    const userInfo = { user, loading, handleGoogle, handleFacebook, Logout, createUser, updateName, handleResetPassword }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;