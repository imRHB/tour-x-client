import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

import initializeFirebase from "../Firebase/firenase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const registerWithEmailAndPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error);
            })
    };

    const loginWithEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {

            })
            .catch(error => {
                setError(error);
            })
    };

    const loginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error);
            })
    };

    const saveUserToDatabase = (email, displayName, method) => {
        const user = { email, displayName };

        fetch('', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => {

            })
    };

    const logout = () => {
        signOut(auth)
            .then(() => {

            })
            .catch(error => {
                setError(error);
            })
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });

        return () => unsubscribed;
    }, [auth]);

    return {
        user,
        error,
        isLoading,
        registerWithEmailAndPassword,
        loginWithEmailAndPassword,
        loginWithGoogle,
        logout
    }
};

export default useFirebase;