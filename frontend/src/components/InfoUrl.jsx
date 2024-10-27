import { Link, useParams } from "react-router-dom";
import useAuthRedirect from "../hooks/useAuthRedirect";
import { useInfoUrlUnitaria } from "../hooks/useInfoUrlUnitaria";
import { URI } from "../Uri";
import QRCode from "react-qr-code";

const estilos = "bg-slate-500 text-white h-10 p-4 rounded-xl flex items-center shadow-md shadow-slate-300"

function InfoUrl() {

    const { id } = useParams();

    useAuthRedirect('../login', false);

    const { datosUrlUnitarios } = useInfoUrlUnitaria(id)

    return (
        <div className=" overflow-hidden w-full ">
            <Link to={"../"}><p>Volver</p></Link>
            <div className="w-2/3 p-5 flex justify-center flex-col gap-5">
                <div className={estilos}><p><span>Fecha de creación de la url acortada: </span>{datosUrlUnitarios.date}</p></div>
                <div className={estilos}><p><span>Url original: </span>{datosUrlUnitarios.url}</p></div>
                <div className="bg-slate-500 text-white h-10 p-4 rounded-xl flex items-center shadow-md shadow-slate-300 "><p><span>Url acortada: </span>{URI + datosUrlUnitarios.code}</p></div>
                <div className={estilos}><p><span>Fecha de expiracion de la url: </span>{datosUrlUnitarios.expiresAt}</p></div>
                <div className="flex justify-between">
                    <div className="bg-purple-800 w-1/3 text-white h-10 p-4 rounded-xl flex items-center shadow-md shadow-slate-300 "><p><span>Password: </span>{datosUrlUnitarios.passwordUrl ? <span className="text-green-600">Si</span> : <span className="text-red-700">No</span>}</p></div>
                    <div className="bg-purple-800 w-1/2 text-white h-10 p-4 rounded-xl flex items-center shadow-md shadow-slate-300 "><p><span>Limites de click de la url: </span>{datosUrlUnitarios.clickLimit ? datosUrlUnitarios.clickLimit :
                        <span  >No</span>}</p></div>
                </div>
                <div className="bg-purple-800 w-1/2  text-white h-10 p-4 rounded-xl flex items-center shadow-md shadow-slate-300 "><p><span>Click hechos en la url: </span>{datosUrlUnitarios.countClick}</p></div>
                {datosUrlUnitarios.code && <QRCode value={URI + datosUrlUnitarios.code} style={{ background: 'black' }} />}
            </div>

        </div>
    )
}

export default InfoUrl