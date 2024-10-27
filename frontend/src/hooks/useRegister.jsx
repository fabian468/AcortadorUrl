
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/sdk";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
    const [error, setError] = useState('');

    const navigate = useNavigate()

    const registerUser = async (email, password, nombre) => {
        setError('');

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await updateProfile(user, { displayName: nombre });

            console.log('User registered:', userCredential.user);
            navigate('../user');
        } catch (err) {
            setError('Error al registrar usuario: ' + err.message);
        }
    };

    return { registerUser, error };
};

export default useRegister;
