import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signInWithPopup, signOut } from 'firebase/auth';

import initializeFirebase from "../Firebase/firenase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const registerWithEmailAndPassword = (email, password, name, location, navigate) => {
        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const destination = location?.state?.from || '/';
                navigate(destination);

                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUserToDatabase(email, name, 'POST');

                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {

                    })
                    .catch(error => {
                        setError(error);
                    })
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => setIsLoading(false));
    };

    const loginWithEmailAndPassword = (email, password, location, navigate) => {
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const destination = location?.state?.from || '/';
                navigate(destination);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => setIsLoading(false));
    };

    const loginWithGoogle = (location, navigate) => {
        setIsLoading(true);

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result?.user;
                const destination = location?.state?.from || '/';
                saveUserToDatabase(user?.email, user?.displayName, 'PUT');
                setError('');
                navigate(destination);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => setIsLoading(false));
    };

    const saveUserToDatabase = (email, displayName, method) => {
        const user = { email, name: displayName };

        fetch('http://localhost:5000/users', {
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
        setIsLoading(true);

        signOut(auth)
            .then(() => {

            })
            .catch(error => {
                setError(error);
            })
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data));
    }, [user?.email]);

    useEffect(() => {
        setIsLoading(true);

        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });

        return () => unsubscribed;
    }, [auth]);

    return {
        user,
        admin,
        error,
        isLoading,
        registerWithEmailAndPassword,
        loginWithEmailAndPassword,
        loginWithGoogle,
        logout
    }
};

export default useFirebase;