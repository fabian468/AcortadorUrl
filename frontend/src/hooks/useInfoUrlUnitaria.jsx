import { useEffect, useState } from "react";
import { URI } from "../Uri";

export const useInfoUrlUnitaria = (id) => {
    const [datosUrlUnitarios, setDatosUrlUnitarios] = useState([])
    useEffect(() => {
        const urldatos = async (idUser) => {
            if (idUser) {
                const res = await fetch(URI + 'urluser/dataurl/' + idUser);
                const data = await res.json();
                setDatosUrlUnitarios(data.urlData)
            }
        };
        urldatos(id)

    }, [id]);

    return { datosUrlUnitarios }
}