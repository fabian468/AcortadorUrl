import { Link } from "react-router-dom"
import InputForms from "./InputForms"
import { useState } from "react";
import useAuthRedirect from "../hooks/useAuthRedirect";
import useLogin from "../hooks/useLogin";
import PropTypes from 'prop-types';

function Login({ setMenuLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login, error, success } = useLogin();

    useAuthRedirect('../user');

    const handleLogin = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <section className=" flex justify-center items-center ">

            <div className=" absolute w-11/12 p-3  top-1/3 shadow-xl shadow-gray-400 text-white rounded-xl bg-gray-600 text-center h-auto md:p-7 md:top-1/4 md:left-5 md:w-1/4 ">
                <p onClick={() => setMenuLogin(false)} className=" md:hidden absolute top-3 right-4">X</p>
                <p className="text-3xl mb-9">Inicia sesión</p>
                <form onSubmit={handleLogin} className="flex gap-8 justify-center items-center flex-col" >
                    <InputForms change={setEmail} texto={"Correo"} placeholder="Correo" />
                    <InputForms change={setPassword} type="password" texto={"clave"} placeholder="Clave" />
                    <button className="bg-green-400 p-2 text-gray-800 w-60 rounded-xl mb-6"> Acceder </button>
                </form>
                <Link className="md:block hidden" to={"/"}>No tengo cuenta</Link>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
            </div>
        </section>
    )
}

Login.propTypes = {
    setMenuLogin: PropTypes.func,
};
export default Login