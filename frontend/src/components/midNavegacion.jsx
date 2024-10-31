import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import Registro2 from "./Registro2"
import FormRecortador from "./FormRecortador"
import { useState } from "react"


function MidNavegacion() {
    const [menuRegistro, setMenuRegistro] = useState(false)
    const [menuLogin, setMenuLogin] = useState(false)


    return (
        <div >

            <FormRecortador Menu={menuRegistro} setMenu={setMenuRegistro} menuLogin={menuLogin} setMenuLogin={setMenuLogin} />
            <Routes>
                <Route path="/" element={<div className={`${menuRegistro ? 'block' : 'hidden'} md:block`}><Registro2 /></div>} />
                <Route path="/login" element={<div className={`${menuLogin ? 'block' : 'hidden'} md:block`}><Login setMenuLogin={setMenuLogin} /></div>} />
            </Routes>
        </div>
    )
}

export default MidNavegacion