import { Link, useParams } from "react-router-dom";
import useAuthRedirect from "../hooks/useAuthRedirect";
import { useInfoUrlUnitaria } from "../hooks/useInfoUrlUnitaria";
import { URI } from "../Uri";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import QRCodeComponent from "./QRCodeComponent";
import useFormExpiraciones from "../hooks/useFormExpiraciones";

const estilos = "bg-slate-500 text-white h-10 p-4 rounded-xl flex justify-center items-center shadow-md shadow-slate-300"

function InfoUrl() {
    const [editar, setEditar] = useState(false)

    const { id } = useParams();

    const {
        setClave,
        setClickLimite,
        setFechaLimite,
        handleSubmit,
    } = useFormExpiraciones(id)

    useAuthRedirect('../login', false);

    const { datosUrlUnitarios } = useInfoUrlUnitaria(id)

    return (
        <div className="  h-1/2 mt-32 overflow-scroll md:overflow-scroll md:mt-0  md:w-full relative ">
            <Link to={"../"}><p>Volver</p></Link>
            <div className="md:w-2/3 p-5 flex justify-center flex-col gap-5">
                <div className={estilos}><p><span>Fecha de creación de la url acortada: </span>{datosUrlUnitarios.date}</p></div>
                <div className={estilos}><p><span>Url original: </span>{datosUrlUnitarios.url}</p></div>
                <div className={estilos}><p><span>Url acortada: </span>{URI + datosUrlUnitarios.code}</p></div>
                <form onSubmit={handleSubmit} className="flex justify-center flex-col gap-5">
                    <div className={estilos}> {!editar ? <p><span>Fecha de expiracion de la url: </span>{datosUrlUnitarios.expiresAt}</p> : <><p>Editar fecha</p> <input className="text-black ml-3 " onChange={e => setFechaLimite(e.target.value)} type="date" /></>}</div>
                    <div className="flex flex-col md:flex-row justify-between md:gap-0  gap-5">
                        <div className="bg-purple-800 md:w-1/3 text-white h-10 p-4 rounded-xl flex items-center shadow-md shadow-slate-300 ">{!editar ? <p><span>Password: </span>{datosUrlUnitarios.passwordUrl ? <span className="text-green-600">Si</span> : <span className="text-red-700">No</span>}</p> : <input onChange={e => setClave(e.target.value)} className="text-black outline-none" placeholder="Editar clave" type="password" />}</div>
                        <div className="bg-purple-800 md:w-1/2 text-white h-10 p-4 rounded-xl flex items-center shadow-md shadow-slate-300 ">{!editar ? <p><span>Limites de click de la url: </span>{datosUrlUnitarios.clickLimit ? datosUrlUnitarios.clickLimit :
                            <span  >No</span>}</p> : <input onChange={e => setClickLimite(e.target.value)} className="text-black outline-none" placeholder="Editar maximo de click" type="number" />}</div>

                    </div>
                    <div className="flex flex-col md:flex-row  justify-between md:gap-0  gap-5">
                        <div className="bg-purple-800 md:w-1/3  text-white h-10 p-4 rounded-xl flex items-center shadow-md shadow-slate-300 "><p><span>Click hechos en la url: </span>{datosUrlUnitarios.countClick}</p></div>
                        {editar && <div className="bg-teal-800 w-1/4  text-white h-10 p-4 rounded-xl flex items-center shadow-md shadow-slate-300 "><button className="w-full">Editar</button> </div>}

                        {!editar ? <div onClick={() => setEditar(true)} className="bg-lime-800 w-1/3 text-white h-10 p-4 rounded-xl flex items-center justify-center shadow-md shadow-slate-300 cursor-pointer ">Editar <FaEdit className="ml-2" /></div> :
                            <div onClick={() => setEditar(false)} className="bg-lime-800 w-2/3 text-white h-10 p-4 rounded-xl flex items-center justify-center shadow-md shadow-slate-300 cursor-pointer ">Cerrar edición</div>
                        }
                    </div>
                </form>

                <div className="flex flex-col md:flex-row   gap-4 md:items-center">
                    <p>Haz click sobre el código QR para descargar</p>
                    <QRCodeComponent URI={URI} datosUrlUnitarios={datosUrlUnitarios.code} />
                </div>


            </div>

        </div >
    )
}

export default InfoUrl