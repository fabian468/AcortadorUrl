import { Link } from "react-router-dom";
import InputForms from "./InputForms";
import { useState } from "react";
import useAuthRedirect from "../hooks/useAuthRedirect";
import useRegister from "../hooks/useRegister";




function Registro2() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repetirPassword, setRepetirPassword] = useState('');

    useAuthRedirect('../user');

    const { registerUser, error } = useRegister();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== repetirPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }
        await registerUser(email, password, nombre);
    };


    return (

        <section className=" absolute shadow-xl shadow-gray-400 p-7 top-24 left-5 h-auto  text-white rounded-xl bg-gray-600 text-center">
            <p className="text-3xl mb-9">Registrate</p>

            <form onSubmit={handleRegister} className="flex gap-8 justify-center items-center flex-col" >
                <InputForms texto={"Nombre"} change={setNombre} placeholder="Nombre usuario" />
                <InputForms texto={"Correo"} type="email" change={setEmail} placeholder="Email" />
                <InputForms texto={"clave"} type="password" change={setPassword} placeholder="Clave" />
                <InputForms texto={"Repetir clave"} type="password" change={setRepetirPassword} placeholder="Repite la clave" />
                <button className="bg-green-400 p-2 text-gray-800 w-60 rounded-xl mb-6"> Acceder </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Link className="md:block hidden" to={"login"}>ya tengo cuenta</Link>
        </section>
    )
}

export default Registro2