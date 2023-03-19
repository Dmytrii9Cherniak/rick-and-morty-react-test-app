import React, { useEffect, useState } from 'react';
import { auth, provider } from '../../config/Config';
import { signInWithPopup } from 'firebase/auth';

function Login() {

    const signIn = () => {
        try {
            signInWithPopup(auth, provider).then(data => {
                localStorage.setItem('email', data.user.email);
            });
        } catch (error) {
            console.log(error)
        }
    }

    return (<div>
        <button onClick={signIn}> Sign with Google </button>
            </div>);
}

export default Login;
