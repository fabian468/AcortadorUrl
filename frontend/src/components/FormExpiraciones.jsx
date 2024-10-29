import PropTypes from 'prop-types';
import useFormExpiraciones from "../hooks/useFormExpiraciones";


function FormExpiraciones({ idurl, existeurl }) {
    const {
        agregarClave,
        setagregarClave,
        setClave,
        agregarClickLimite,
        setagregarClickLimite,
        setClickLimite,
        agregarFechaLimite,
        setAgregarFechaLimite,
        setFechaLimite,
        handleSubmit,
    } = useFormExpiraciones(idurl);



    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-3">
            <label>
                1.- <input type="checkbox" onChange={(e) => setagregarClave(e.target.checked)} />
                Agregar clave para la url:
            </label>
            {agregarClave && (
                <label>
                    <input
                        onChange={(e) => setClave(e.target.value)}
                        className="border-solid"
                        type="password"
                        name="passwordUrl"
                        id="passwordUrl"
                    />
                </label>
            )}

            <label>
                2.- <input type="checkbox" onChange={(e) => setagregarClickLimite(e.target.checked)} />
                Agregar Límite de clics para la url:
            </label>
            {agregarClickLimite && (
                <label>
                    <input
                        placeholder="0"
                        onChange={(e) => setClickLimite(e.target.value)}
                        className="border-solid w-16"
                        type="number"
                        name="clickLimit"
                        id="clickLimit"
                    />
                </label>
            )}

            <label>
                3.- <input type="checkbox" onChange={(e) => setAgregarFechaLimite(e.target.checked)} />
                Agregar fecha de expiración para la url:
            </label>
            {agregarFechaLimite && (
                <label>
                    <input
                        onChange={(e) => setFechaLimite(e.target.value)}
                        className="border-solid w-32"
                        type="date"
                        name="dateUrl"
                        id="dateUrl"
                    />
                </label>
            )}

            {existeurl && (
                <div className="flex flex-col">
                    <button className="bg-green-400 rounded-md p-1 ">Guardar</button>
                    <p className="text-justify text-red-700">
                        Si la url no se guarda, esta tiene una expiración de un día.
                    </p>
                </div>
            )}
        </form>
    );
}

FormExpiraciones.propTypes = {
    idurl: PropTypes.string,
    existeurl: PropTypes.string,
};


export default FormExpiraciones