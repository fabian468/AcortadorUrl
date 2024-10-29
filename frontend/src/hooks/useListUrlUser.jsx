import { useContext, useEffect, useState } from "react";
import { stateCompo } from "../context/stateCompo";
import { URI } from "../Uri";

export const useListUrlUser = () => {

    const [urlUser, setUrlUser] = useState([]);
    const { dataUser } = useContext(stateCompo);


    useEffect(() => {
        const urldatos = async (idUser) => {
            if (idUser) {
                const res = await fetch(URI + 'urluser/' + idUser);
                const data = await res.json();
                setUrlUser(data);
            }
        };
        urldatos(dataUser.uid);
    }, [dataUser]);

    const removeUrlById = (id) => {
        setUrlUser(prevUrls => prevUrls.filter(url => url._id !== id));
    };


    const addUrlUser = async (newUser) => {

        setUrlUser((prevUrls) => [...prevUrls, newUser])
        console.log(urlUser)
    };

    return { urlUser, removeUrlById, addUrlUser }
}