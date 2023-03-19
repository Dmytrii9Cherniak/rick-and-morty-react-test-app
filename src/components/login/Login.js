import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../high_order_component/UseAuth';
import '../login/Login.scss';

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, signIn } = useAuth();

    useEffect(() => {
        if (user) {
            navigate('/characters');
        }
    }, [user, navigate]);

    const fromPage = location?.state?.from?.pathname || '/characters';

    const signIntoApp = () => {
        signIn();
        navigate(fromPage);
    }

    return (
        <div className="login">
            <button className="login-with-google-btn" onClick={signIntoApp}> Sign with Google </button>
        </div>
    );
}

export default Login;
