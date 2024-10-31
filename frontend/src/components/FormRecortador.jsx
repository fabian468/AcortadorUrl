import { useForm } from "react-hook-form";
import { cut } from "../services/cut";
import { useState } from "react";
import { URI } from "../Uri";
import QRCode from "react-qr-code";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";


function FormRecortador({ Menu, setMenu, menuLogin, setMenuLogin }) {
    const [url, setUrl] = useState("");
    const [urlRecortada, setUrlRecortada] = useState("");

    const navigate = useNavigate()

    const { register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            mantenerSesion: true
        }
    });

    const onSubmit = handleSubmit(async (data) => {
        const respuesta = await cut(data.url);
        if (respuesta?.code) {
            setUrlRecortada(respuesta.code);
        }
        reset();
    });

    return (

        <main className='relative flex justify-center items-center w-full h-[100vh] bg-gray-100 '>

            <p onClick={() => {
                navigate('/')
                setMenuLogin(false)
                setMenu(!Menu)
            }} className=" md:hidden absolute top-4 left-4">
                Registrate
            </p>


            <div className="flex   justify-center items-center flex-col sm:block sm:w-[40%]" >
                <label htmlFor="url" className="block  sm:text-left  sm:text-7xl text-center text-4xl  font-serif  leading-6 mb-9  text-gray-900">Acorta tu URL</label>
                <form className="flex w-60 sm:w-auto gap-3 mt-2 sm:flex-row flex-col" onSubmit={onSubmit}>
                    <input {...register("url",
                        {
                            required: {
                                value: true,
                                message: "La URL es requerida"
                            },
                            pattern: {
                                value: /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/,
                                message: "URL no valida"
                            }
                        }
                    )}
                        placeholder="ejemplo: https://www.google.cl/"
                        type="text"
                        name="url"
                        id="url"
                        autoComplete="off"
                        className="block w-60 sm:w-full p-2 rounded-xl border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset
                      ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                       sm:text-sm sm:leading-6"
                        onChange={e => setUrl(e.target.value)}
                    />
                    <button className="h-10  px-6 font-semibold rounded-full bg-violet-600 text-white">
                        Acortar
                    </button>
                </form>
                <div className="flex flex-col gap-3 mt-3">
                    {
                        errors.url && <span className="text-xs text-red-600">{errors.url.message}</span>
                    }

                    <span className="w-60">Url original: {url} </span>

                    <span className="w-60">Url Acortada: {urlRecortada && <a target="_blanck" href={URI + urlRecortada}>{URI + urlRecortada}</a>}</span>
                    {urlRecortada && <QRCode value={URI + urlRecortada} style={{ background: 'black' }} />}
                    <p onClick={() => {
                        navigate('/login')
                        setMenu(false)
                        setMenuLogin(!menuLogin)
                    }} className=" md:hidden text-center m-10">
                        Inicia sesión
                    </p>
                </div>
            </div>

        </main>
    );
}

FormRecortador.propTypes = {
    Menu: PropTypes.bool,
    setMenu: PropTypes.func,
    menuLogin: PropTypes.bool,
    setMenuLogin: PropTypes.func,
};

export default FormRecortador;
