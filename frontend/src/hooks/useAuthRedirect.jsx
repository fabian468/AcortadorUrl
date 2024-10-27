
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/sdk";

const useAuthRedirect = (redirectPath, login = true) => {
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {

            if (user && login) {
                navigate(redirectPath);
            } else if (!user && !login) {
                navigate(redirectPath);
            }
        });
        return () => unsubscribe();
    }, [navigate, redirectPath, login]);
};

export default useAuthRedirect;
