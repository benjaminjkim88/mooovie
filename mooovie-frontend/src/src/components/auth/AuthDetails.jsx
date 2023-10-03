import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import './signUpStyle.css'

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out successful')
        }).catch (error => console.log(error))
    }
    
    return (
        <div className="container">
            <h1>
            { authUser ? <><p>{ `Signed In as ${authUser.email}`}</p> <button onClick={userSignOut}>Sign Out</button> </>: <p>Signed Out </p>}
            </h1>
        </div>
    )
}
export default AuthDetails