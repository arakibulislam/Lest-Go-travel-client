import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebase from "../Firebase/firebaseInit";


initFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsloading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const loginWithGoogle = () => {
        setIsloading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsloading(false));
    }

    const logOut = () => {
        setIsloading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsloading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsloading(false)
        })
    }, [])
    return {
        user,
        error,
        loginWithGoogle,
        logOut,
        isLoading

    }
}

export default useFirebase;