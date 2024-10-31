import { useState, useContext } from "react";
import { stateCompo } from "../context/stateCompo";
import { URI } from "../Uri";


const useFormExpiraciones = (idurl) => {
    const [agregarClave, setagregarClave] = useState(false);
    const [clave, setClave] = useState('');
    const [agregarClickLimite, setagregarClickLimite] = useState(false);
    const [clickLimite, setClickLimite] = useState(0);
    const [agregarFechaLimite, setAgregarFechaLimite] = useState(false);
    const [fechaLimite, setFechaLimite] = useState();


    const { dataUser } = useContext(stateCompo);



    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            _id: idurl,
            uid: dataUser.uid
        };

        if (clave) {
            data.passwordUrl = clave;
        }

        if (clickLimite) {
            data.clickLimit = parseInt(clickLimite);
        }

        if (fechaLimite) {
            data.expiresAt = new Date(fechaLimite).toISOString();
        }

        try {
            const resp = await fetch(URI + "urluser/actualizar", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await resp.json();

            if (resp.ok) {
                alert("guardado exitoso")

            } else {
                alert("Error al guardar los datos: " + result.message);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            alert("Hubo un error al conectar con el servidor.");
        }
    };

    return {
        agregarClave,
        setagregarClave,
        clave,
        setClave,
        agregarClickLimite,
        setagregarClickLimite,
        clickLimite,
        setClickLimite,
        agregarFechaLimite,
        setAgregarFechaLimite,
        fechaLimite,
        setFechaLimite,
        handleSubmit,
    };
};

export default useFormExpiraciones;
