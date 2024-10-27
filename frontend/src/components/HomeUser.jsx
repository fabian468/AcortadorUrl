import { useContext } from "react"
import { stateCompo } from "../context/stateCompo"
import ListUrlUser from "./ListUrlUser"
import FormRecortadorUser from "./FormRecortadorUser"
import { Route, Routes } from "react-router-dom"
import InfoUrl from "./InfoUrl"
import useAuthRedirect from "../hooks/useAuthRedirect"
import Nav from "./Nav"

function HomeUser() {
    const { dataUser } = useContext(stateCompo)

    useAuthRedirect('../login', false);
    return (
        <div className="w-full flex">
            <Nav nombre={dataUser.displayName} />
            <div className="w-1/2 m-3">
                <div className=" w-full  bg-gray-900 h-10 flex items-center ">
                    <p className="text-gray-50 ml-5">{dataUser.email}</p>
                </div>
                <ListUrlUser />
            </div>
            <Routes>
                <Route path="/" element={<FormRecortadorUser />} />
                <Route path="/:id" element={<InfoUrl />} />
            </Routes>
        </div>
    )
}

export default HomeUser