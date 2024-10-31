import { useContext, useState } from "react"
import { stateCompo } from "../context/stateCompo"
import ListUrlUser from "./ListUrlUser"
import FormRecortadorUser from "./FormRecortadorUser"
import { Route, Routes } from "react-router-dom"
import InfoUrl from "./InfoUrl"
import useAuthRedirect from "../hooks/useAuthRedirect"
import Nav from "./Nav"
import FormEditarSeguridad from "./FormEditarSeguridad"

function HomeUser() {
    const [misUrls, setMisUrls] = useState(false)
    const { dataUser } = useContext(stateCompo)

    useAuthRedirect('../login', false);
    return (
        <div className="  md:w-full flex">
            <p onClick={() => setMisUrls(!misUrls)} className="md:hidden absolute top-5 left-3" >Mis urls</p>
            <Nav nombre={dataUser.displayName} />
            <div className={`${misUrls ? 'block' : 'hidden'} md:block z-50 w-full md:w-1/2 md:m-3`}>
                <div className=" w-full bg-gray-900 h-10 flex items-center justify-between ">
                    <p className="text-gray-50 ml-5">{dataUser.email}</p>
                    <p onClick={() => setMisUrls(!misUrls)} className="md:hidden text-gray-50 mr-5" >Volver</p>
                </div>
                <ListUrlUser setMisUrls={setMisUrls} />
            </div>
            <Routes>
                <Route path="/" element={<FormRecortadorUser />} />
                <Route path="/:id" element={<InfoUrl />} />
                <Route path="/editar" element={<FormEditarSeguridad />} />
            </Routes>
        </div>
    )
}

export default HomeUser