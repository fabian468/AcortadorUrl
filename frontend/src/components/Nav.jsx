import Avvvatars from "avvvatars-react"
import { Link } from "react-router-dom"
import { signOut } from "firebase/auth";
import { auth } from "../firebase/sdk";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

function Nav({ nombre }) {

    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('../login')
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };


    return (
        <nav className="md:fixed absolute w-auto right-0 z-40 " >

            <div className=" mr-8 mt-6 " >
                <Link onClick={handleLogout} to={"login"} className="flex justify-end items-center  gap-2">
                    <Avvvatars value={nombre} size={100} shadow borderColor="blue" />
                    <h2 className="cursor-pointer">Cerrar sesión</h2>
                </Link>
            </div>
        </nav>
    )
}
Nav.propTypes = {
    nombre: PropTypes.string
}


export default Nav