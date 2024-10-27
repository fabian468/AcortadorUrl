import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import Registro2 from "./Registro2"
import FormRecortador from "./FormRecortador"


function MidNavegacion() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Registro2 />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <FormRecortador />
        </>
    )
}

export default MidNavegacion