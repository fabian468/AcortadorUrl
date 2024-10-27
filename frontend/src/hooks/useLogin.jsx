
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/sdk";

const useLogin = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const login = async (email, password) => {
        setError('');
        setSuccess('');

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const token = await userCredential.user.getIdToken();
            Cookies.set('authToken', token, { expires: 7 });
            setSuccess('Inicio de sesión exitoso');
            navigate('../user');
        } catch (err) {
            setError('Error al iniciar sesión: ' + err.message);
        }
    };

    return { login, error, success };
};

export default useLogin;
